import { inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Article } from '../../models/article.model';
import { Comment } from '../../models/comment.model';
import { ApiArticle, ApiComment } from '../../models/api.models';
import { ArticleMapperService } from '../article-mapper.service';
import { IArticleService, ArticleWithComments } from './article-service.interface';
import {
  GET_ARTICLE,
  GET_COMMENTS,
  ARTICLE_RATING_UP,
  ARTICLE_RATING_DOWN,
  CREATE_COMMENT,
  COMMENT_RATING_UP,
  COMMENT_RATING_DOWN
} from '../../graphql/article.queries';

interface GetArticleData { article: ApiArticle }
interface GetCommentsData { commentsByArticle: ApiComment[] }
interface ArticleRatingUpData { articleRatingUp: ApiArticle }
interface ArticleRatingDownData { articleRatingDown: ApiArticle }
interface CreateCommentData { createComment: ApiComment }
interface CommentRatingUpData { commentRatingUp: Pick<ApiComment, 'id' | 'rating' | 'articleId'> }
interface CommentRatingDownData { commentRatingDown: Pick<ApiComment, 'id' | 'rating' | 'articleId'> }

@Injectable()
export class ArticleGraphqlService implements IArticleService {
  private apollo = inject(Apollo);
  private mapper = inject(ArticleMapperService);

  getArticleWithComments(id: string): Observable<ArticleWithComments> {
    return forkJoin({
      articleRes: this.apollo.query<GetArticleData>({
        query: GET_ARTICLE,
        variables: { id }
      }),
      commentsRes: this.apollo.query<GetCommentsData>({
        query: GET_COMMENTS,
        variables: { articleId: id }
      })
    }).pipe(
      map(({ articleRes, commentsRes }) => ({
        article: this.mapper.toArticle(articleRes.data.article),
        comments: commentsRes.data.commentsByArticle.map(c => this.mapper.toComment(c))
      }))
    );
  }

  addComment(comment: Comment): Observable<Comment[]> {
    return this.apollo.mutate<CreateCommentData>({
      mutation: CREATE_COMMENT,
      variables: {
        createComment: {
          content: comment.text,
          articleId: comment.articleId,
          username: comment.name
        }
      }
    }).pipe(
      switchMap(() =>
        this.apollo.query<GetCommentsData>({
          query: GET_COMMENTS,
          variables: { articleId: comment.articleId },
          fetchPolicy: 'network-only'
        })
      ),
      map(res => res.data.commentsByArticle.map(c => this.mapper.toComment(c)))
    );
  }

  updateCommentRating(commentId: string, delta: number): Observable<Comment[]> {
    const mutation = delta > 0 ? COMMENT_RATING_UP : COMMENT_RATING_DOWN;
    return this.apollo.mutate<CommentRatingUpData & CommentRatingDownData>({
      mutation,
      variables: { id: commentId }
    }).pipe(
      switchMap(res => {
        const updated = res.data?.commentRatingUp ?? res.data?.commentRatingDown;
        if (!updated) return of([]);
        return this.apollo.query<GetCommentsData>({
          query: GET_COMMENTS,
          variables: { articleId: updated.articleId },
          fetchPolicy: 'network-only'
        }).pipe(
          map(r => r.data.commentsByArticle.map(c => this.mapper.toComment(c)))
        );
      })
    );
  }

  updateArticleRating(articleId: string, delta: number): Observable<Article> {
    const mutation = delta > 0 ? ARTICLE_RATING_UP : ARTICLE_RATING_DOWN;
    return this.apollo.mutate<ArticleRatingUpData & ArticleRatingDownData>({
      mutation,
      variables: { id: articleId }
    }).pipe(
      map(res => {
        const data = res.data?.articleRatingUp ?? res.data?.articleRatingDown;
        return this.mapper.toArticle(data!);
      })
    );
  }
}
