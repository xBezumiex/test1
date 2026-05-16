import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Article } from '../models/article.model';
import { Comment } from '../models/comment.model';
import { ApiArticle, ApiComment } from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class ArticleMapperService {
  toArticle(api: ApiArticle): Article {
    return {
      id: api.id,
      title: api.title,
      content: api.content,
      date: new Date(api.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      image: api.image ? `${environment.apiUrl}/uploads/${api.image}` : undefined,
      rating: api.rating,
      categoryId: api.categoryId ?? undefined,
      categoryName: api.category?.name
    };
  }

  toComment(api: ApiComment): Comment {
    return {
      id: api.id,
      articleId: api.articleId,
      name: api.username,
      text: api.content,
      date: new Date(api.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      rating: api.rating
    };
  }
}
