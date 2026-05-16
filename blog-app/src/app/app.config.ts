import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { ARTICLES_SERVICE } from './services/articles/articles-service.token';
import { ArticlesService } from './services/articles/articles.service';
import { ArticlesHttpService } from './services/articles/articles-http.service';
import { ARTICLE_SERVICE } from './services/article/article-service.token';
import { ArticleService } from './services/article/article.service';
import { ArticleHttpService } from './services/article/article-http.service';
import { CATEGORY_SERVICE } from './services/categories/categories-service.token';
import { CategoriesLocalService } from './services/categories/categories-local.service';
import { CategoriesHttpService } from './services/categories/categories-http.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    {
      provide: ARTICLES_SERVICE,
      useClass: environment.useApi ? ArticlesHttpService : ArticlesService
    },
    {
      provide: ARTICLE_SERVICE,
      useClass: environment.useApi ? ArticleHttpService : ArticleService
    },
    {
      provide: CATEGORY_SERVICE,
      useClass: environment.useApi ? CategoriesHttpService : CategoriesLocalService
    }
  ]
};
