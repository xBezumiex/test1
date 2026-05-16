export interface Article {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
  rating?: number;
  categoryId?: string;
  categoryName?: string;
}
