import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { Comment } from '../../models/comment.model';

export interface ArticleWithComments {
  article: Article;
  comments: Comment[];
}

export interface IArticleService {
  getArticleWithComments(id: string): Observable<ArticleWithComments>;
  addComment(comment: Comment): Observable<Comment[]>;
  updateCommentRating(commentId: string, delta: number): Observable<Comment[]>;
  updateArticleRating(articleId: string, delta: number): Observable<Article>;
}
