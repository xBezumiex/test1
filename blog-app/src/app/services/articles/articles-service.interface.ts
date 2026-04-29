import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';

export interface PaginatedResult {
  articles: Article[];
  total: number;
}

export interface IArticlesService {
  getArticles(page: number): Observable<PaginatedResult>;
  addArticle(article: Article, page: number): Observable<PaginatedResult>;
  updateArticle(article: Article, page: number): Observable<PaginatedResult>;
  deleteArticle(id: number, page: number): Observable<PaginatedResult>;
}
