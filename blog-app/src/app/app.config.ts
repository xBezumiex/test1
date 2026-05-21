import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { ARTICLES_SERVICE } from './services/articles/articles-service.token';
import { ArticlesService } from './services/articles/articles.service';
import { ArticlesHttpService } from './services/articles/articles-http.service';
import { ARTICLE_SERVICE } from './services/article/article-service.token';
import { ArticleService } from './services/article/article.service';
import { ArticleGraphqlService } from './services/article/article-graphql.service';
import { CATEGORY_SERVICE } from './services/categories/categories-service.token';
import { CategoriesLocalService } from './services/categories/categories-local.service';
import { CategoriesHttpService } from './services/categories/categories-http.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    ...(environment.useApi
      ? [
          {
            provide: APOLLO_OPTIONS,
            useFactory(httpLink: HttpLink): ApolloClientOptions<unknown> {
              return {
                link: httpLink.create({ uri: environment.graphqlUrl }),
                cache: new InMemoryCache()
              };
            },
            deps: [HttpLink]
          }
        ]
      : []),
    {
      provide: ARTICLES_SERVICE,
      useClass: environment.useApi ? ArticlesHttpService : ArticlesService
    },
    {
      provide: ARTICLE_SERVICE,
      useClass: environment.useApi ? ArticleGraphqlService : ArticleService
    },
    {
      provide: CATEGORY_SERVICE,
      useClass: environment.useApi ? CategoriesHttpService : CategoriesLocalService
    }
  ]
};
