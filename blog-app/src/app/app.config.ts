import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { ARTICLES_SERVICE } from './services/articles/articles-service.token';
import { ArticlesService } from './services/articles/articles.service';
import { ARTICLE_SERVICE } from './services/article/article-service.token';
import { ArticleService } from './services/article/article.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
    { provide: ARTICLES_SERVICE, useClass: ArticlesService },
    { provide: ARTICLE_SERVICE, useClass: ArticleService }
  ]
};
