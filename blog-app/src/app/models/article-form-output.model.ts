import { Article } from './article.model';

export interface ArticleFormOutput {
  article: Article;
  imageFile?: File;
}
