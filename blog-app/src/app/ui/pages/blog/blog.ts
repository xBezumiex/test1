import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { Article } from '../../../models/article.model';
import { ArticleFormOutput } from '../../../models/article-form-output.model';
import { ArticleComponent } from '../../components/article/article';
import { ArticleFormComponent } from '../../components/article-form/article-form';
import { ARTICLES_SERVICE } from '../../../services/articles/articles-service.token';
import { ArticlesStoreService } from '../../../services/articles-store.service';
import { HasRoleDirective } from '../../../directives/has-role.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ArticleComponent, ArticleFormComponent, MatIconModule, HasRoleDirective],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent implements OnInit {
  private service = inject(ARTICLES_SERVICE);
  private store = inject(ArticlesStoreService);
  private titleService = inject(Title);

  protected articles = this.store.articles;
  protected currentPage = this.store.currentPage;
  protected total = signal(0);
  protected showForm = signal(false);
  protected showStats = signal(false);
  protected editingArticle = signal<Article | null>(null);
  protected articleCount = computed(() => this.total());
  protected totalPages = computed(() => Math.ceil(this.total() / 7));
  protected pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1)
  );

  ngOnInit(): void {
    this.titleService.setTitle('My Blogs | Blog App');
    this.loadPage(this.currentPage());
  }

  private loadPage(page: number): void {
    this.service.getArticles(page).subscribe(result => {
      this.store.saveArticles(result.articles);
      this.store.savePage(page);
      this.total.set(result.total);
    });
  }

  protected onPageChange(page: number): void {
    this.loadPage(page);
    this.showForm.set(false);
    this.editingArticle.set(null);
  }

  protected toggleForm(): void {
    this.showForm.update(v => !v);
    if (this.showForm()) this.editingArticle.set(null);
  }

  protected toggleStats(): void {
    this.showStats.update(v => !v);
  }

  protected onArticleEdit(article: Article): void {
    this.editingArticle.set(article);
    this.showForm.set(true);
  }

  protected onArticleSubmit(data: ArticleFormOutput): void {
    if (this.editingArticle()) {
      this.service.updateArticle(data.article, this.currentPage(), data.imageFile).subscribe(result => {
        this.store.saveArticles(result.articles);
        this.total.set(result.total);
      });
      this.editingArticle.set(null);
    } else {
      this.service.addArticle(data.article, 1, data.imageFile).subscribe(result => {
        this.store.saveArticles(result.articles);
        this.store.savePage(1);
        this.total.set(result.total);
      });
    }
    this.showForm.set(false);
  }

  protected onFormCancel(): void {
    this.editingArticle.set(null);
    this.showForm.set(false);
  }

  protected onArticleDelete(id: string): void {
    this.service.deleteArticle(id, this.currentPage()).subscribe(result => {
      this.store.saveArticles(result.articles);
      this.total.set(result.total);
      if (result.articles.length === 0 && this.currentPage() > 1) {
        this.loadPage(this.currentPage() - 1);
      }
    });
  }
}
