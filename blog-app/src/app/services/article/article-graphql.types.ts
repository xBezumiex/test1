import { ApiArticle, ApiComment } from '../../models/api.models';

export interface GetArticleData {
  article: ApiArticle;
}

export interface GetCommentsData {
  commentsByArticle: ApiComment[];
}

export interface ArticleRatingUpData {
  articleRatingUp: ApiArticle;
}

export interface ArticleRatingDownData {
  articleRatingDown: ApiArticle;
}

export interface CreateCommentData {
  createComment: ApiComment;
}

export interface CommentRatingUpData {
  commentRatingUp: Pick<ApiComment, 'id' | 'rating' | 'articleId'>;
}

export interface CommentRatingDownData {
  commentRatingDown: Pick<ApiComment, 'id' | 'rating' | 'articleId'>;
}
