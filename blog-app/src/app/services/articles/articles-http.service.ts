import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Article } from '../../models/article.model';
import { ApiArticle, ApiArticlesResponse } from '../../models/api.models';
import { ArticleMapperService } from '../article-mapper.service';
import { IArticlesService, PaginatedResult } from './articles-service.interface';

const PAGE_SIZE = 7;

@Injectable()
export class ArticlesHttpService implements IArticlesService {
  private http = inject(HttpClient);
  private mapper = inject(ArticleMapperService);
  private base = environment.apiUrl;

  getArticles(page: number): Observable<PaginatedResult> {
    return this.http
      .get<ApiArticlesResponse>(`${this.base}/articles`, {
        params: { page: page - 1, limit: PAGE_SIZE }
      })
      .pipe(
        map(res => ({
          articles: res.data.map(a => this.mapper.toArticle(a)),
          total: res.total
        }))
      );
  }

  addArticle(article: Article, page: number, imageFile?: File): Observable<PaginatedResult> {
    const body = this.buildFormData(article, imageFile);
    return this.http
      .post<ApiArticle>(`${this.base}/articles`, body)
      .pipe(switchMap(() => this.getArticles(page)));
  }

  updateArticle(article: Article, page: number, imageFile?: File): Observable<PaginatedResult> {
    const body = this.buildFormData(article, imageFile);
    return this.http
      .patch<ApiArticle>(`${this.base}/articles/${article.id}`, body)
      .pipe(switchMap(() => this.getArticles(page)));
  }

  deleteArticle(id: string, page: number): Observable<PaginatedResult> {
    return this.http
      .delete(`${this.base}/articles/${id}`)
      .pipe(switchMap(() => this.getArticles(page)));
  }

  private buildFormData(article: Article, imageFile?: File): FormData {
    const fd = new FormData();
    fd.append('title', article.title);
    fd.append('content', article.content);
    if (article.categoryId) fd.append('categoryId', article.categoryId);
    if (imageFile) fd.append('image', imageFile);
    return fd;
  }
}
