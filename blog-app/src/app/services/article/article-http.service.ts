import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Article } from '../../models/article.model';
import { Comment } from '../../models/comment.model';
import { ApiArticle, ApiComment } from '../../models/api.models';
import { ArticleMapperService } from '../article-mapper.service';
import { IArticleService, ArticleWithComments } from './article-service.interface';

@Injectable()
export class ArticleHttpService implements IArticleService {
  private http = inject(HttpClient);
  private mapper = inject(ArticleMapperService);
  private base = environment.apiUrl;

  getArticleWithComments(id: string): Observable<ArticleWithComments> {
    return forkJoin({
      article: this.http.get<ApiArticle>(`${this.base}/articles/${id}`),
      comments: this.http.get<ApiComment[]>(`${this.base}/comments/article/${id}`)
    }).pipe(
      map(({ article, comments }) => ({
        article: this.mapper.toArticle(article),
        comments: comments.map(c => this.mapper.toComment(c))
      }))
    );
  }

  addComment(comment: Comment): Observable<Comment[]> {
    return this.http
      .post<ApiComment>(`${this.base}/comments`, {
        username: comment.name,
        content: comment.text,
        articleId: comment.articleId
      })
      .pipe(
        switchMap(() =>
          this.http
            .get<ApiComment[]>(`${this.base}/comments/article/${comment.articleId}`)
            .pipe(map(list => list.map(c => this.mapper.toComment(c))))
        )
      );
  }

  updateCommentRating(commentId: string, delta: number): Observable<Comment[]> {
    return this.http
      .patch<ApiComment>(`${this.base}/comments/${commentId}/rating`, { rating: delta })
      .pipe(
        switchMap(updated =>
          this.http
            .get<ApiComment[]>(`${this.base}/comments/article/${updated.articleId}`)
            .pipe(map(list => list.map(c => this.mapper.toComment(c))))
        )
      );
  }

  updateArticleRating(articleId: string, delta: number): Observable<Article> {
    const endpoint = delta > 0 ? 'rating-up' : 'rating-down';
    return this.http
      .patch<ApiArticle>(`${this.base}/articles/${articleId}/${endpoint}`, {})
      .pipe(map(a => this.mapper.toArticle(a)));
  }
}
