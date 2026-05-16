import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Article } from '../../models/article.model';
import { Comment } from '../../models/comment.model';
import { IArticleService, ArticleWithComments } from './article-service.interface';

const ARTICLES_KEY = 'blog_articles';
const COMMENTS_KEY = 'blog_comments';

@Injectable()
export class ArticleService implements IArticleService {
  private getArticles(): Article[] {
    const raw = localStorage.getItem(ARTICLES_KEY);
    return raw ? (JSON.parse(raw) as Article[]) : [];
  }

  private getComments(): Comment[] {
    const raw = localStorage.getItem(COMMENTS_KEY);
    return raw ? (JSON.parse(raw) as Comment[]) : [];
  }

  getArticleWithComments(id: string): Observable<ArticleWithComments> {
    const article = this.getArticles().find(a => a.id === id);
    if (!article) return throwError(() => new Error(`Article ${id} not found`));
    const comments = this.getComments().filter(c => c.articleId === id);
    return of({ article, comments });
  }

  addComment(comment: Comment): Observable<Comment[]> {
    const newComment: Comment = { ...comment, id: Date.now().toString() };
    const all = [...this.getComments(), newComment];
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(all));
    return of(all.filter(c => c.articleId === comment.articleId));
  }

  updateCommentRating(commentId: string, delta: number): Observable<Comment[]> {
    const all = this.getComments();
    const target = all.find(c => c.id === commentId);
    if (!target) return of([]);
    const updated = all.map(c =>
      c.id === commentId ? { ...c, rating: c.rating + delta } : c
    );
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(updated));
    return of(updated.filter(c => c.articleId === target.articleId));
  }

  updateArticleRating(articleId: string, delta: number): Observable<Article> {
    const all = this.getArticles().map(a =>
      a.id === articleId ? { ...a, rating: (a.rating ?? 0) + delta } : a
    );
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(all));
    return of(all.find(a => a.id === articleId)!);
  }
}
