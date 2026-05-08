import { Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home';
import { BlogComponent } from './ui/pages/blog/blog';
import { ArticleDetailComponent } from './ui/pages/article-detail/article-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: ArticleDetailComponent },
  { path: '**', redirectTo: '' }
];
