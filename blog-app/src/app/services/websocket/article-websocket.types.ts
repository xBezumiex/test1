export interface WsCommentCreatedPayload {
  commentId: string;
  articleId: string;
  content: string;
  username: string;
  createdAt: string;
}

export interface WsCommentRatingChangedPayload {
  commentId: string;
  articleId: string;
  rating: number;
  prevRating: number;
}

export interface WsArticleRatingChangedPayload {
  articleId: string;
  rating: number;
  prevRating: number;
}

export interface WsEvent {
  event: string;
  data: { type: string; payload: unknown };
}

export interface WsSendMessage {
  event: string;
  data: unknown;
}
