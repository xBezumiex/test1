import { InjectionToken } from '@angular/core';
import { IArticleService } from './article-service.interface';

export const ARTICLE_SERVICE = new InjectionToken<IArticleService>('ArticleService');
