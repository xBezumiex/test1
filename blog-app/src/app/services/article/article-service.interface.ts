import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { Comment } from '../../models/comment.model';

export interface ArticleWithComments {
  article: Article;
  comments: Comment[];
}

export interface IArticleService {
  getArticleWithComments(id: number): Observable<ArticleWithComments>;
  addComment(comment: Comment): Observable<Comment[]>;
  updateCommentRating(commentId: number, delta: number): Observable<Comment[]>;
  updateArticleRating(articleId: number, delta: number): Observable<Article>;
}
