import { Injectable, signal } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({ providedIn: 'root' })
export class ArticlesStoreService {
  articles = signal<Article[]>([]);
  currentPage = signal(1);

  saveArticles(articles: Article[]): void {
    this.articles.set(articles);
  }

  savePage(page: number): void {
    this.currentPage.set(page);
  }
}
