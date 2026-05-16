export interface ApiCategory {
  id: string;
  name: string;
}

export interface ApiArticle {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  image: string | null;
  rating: number;
  categoryId: string | null;
  category: ApiCategory | null;
}

export interface ApiArticlesResponse {
  data: ApiArticle[];
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
