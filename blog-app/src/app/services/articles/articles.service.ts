import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../models/article.model';
import { IArticlesService, PaginatedResult } from './articles-service.interface';

export const PAGE_SIZE = 7;

const STORAGE_KEY = 'blog_articles';

const SEED_ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Minim anim pariatur magna duis sit et dolor inci',
    content: 'Sint occaecat deserunt aliquo do occaecat ut quis. Cupidatat magna fugiat quis sit duis est in volup.',
    date: 'Oct 16, 2025'
  },
  {
    id: 2,
    title: 'Esse ad duis occaecat exercitation lorem ipsum',
    content: 'Exercitation in aliqua pariatur. Voluptate deserunt mollit ullamco consectetur.',
    date: 'Oct 10, 2025'
  },
  {
    id: 3,
    title: 'Dolor sit amet consectetur adipiscing elit',
    content: 'Fugiat Lorem veniam cillum officia nisi. Nulla dolore magna minim laboris.',
    date: 'Oct 05, 2025'
  }
];

@Injectable()
export class ArticlesService implements IArticlesService {
  private getFromStorage(): Article[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Article[];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ARTICLES));
    return SEED_ARTICLES;
  }

  private saveToStorage(articles: Article[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  }

  getArticles(page: number): Observable<PaginatedResult> {
    const all = this.getFromStorage();
    const start = (page - 1) * PAGE_SIZE;
    const articles = all.slice(start, start + PAGE_SIZE);
    return of({ articles, total: all.length });
  }

  addArticle(article: Article, page: number): Observable<PaginatedResult> {
    const all = [article, ...this.getFromStorage()];
    this.saveToStorage(all);
    return this.getArticles(page);
  }

  updateArticle(article: Article, page: number): Observable<PaginatedResult> {
    const all = this.getFromStorage().map(a => (a.id === article.id ? article : a));
    this.saveToStorage(all);
    return this.getArticles(page);
  }

  deleteArticle(id: number, page: number): Observable<PaginatedResult> {
    const all = this.getFromStorage().filter(a => a.id !== id);
    this.saveToStorage(all);
    return this.getArticles(page);
  }
}
