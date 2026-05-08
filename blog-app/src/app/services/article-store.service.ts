import { Injectable, signal } from '@angular/core';
import { Article } from '../models/article.model';
import { Comment } from '../models/comment.model';

@Injectable({ providedIn: 'root' })
export class ArticleStoreService {
  article = signal<Article | null>(null);
  comments = signal<Comment[]>([]);

  saveArticle(article: Article): void {
    this.article.set(article);
  }

  saveComments(comments: Comment[]): void {
    this.comments.set(comments);
  }
}
