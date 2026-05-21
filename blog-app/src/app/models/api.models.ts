export interface ApiCategory {
  id: string;
  name: string;
}

export interface ApiArticle {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  imgSrc: string | null;
  rating: number;
  categoryId: string | null;
  category: ApiCategory | null;
}

export interface ApiArticlesResponse {
  items: ApiArticle[];
  total: number;
}

export interface ApiComment {
  id: string;
  username: string;
  content: string;
  createdAt: string;
  rating: number;
  articleId: string;
}
