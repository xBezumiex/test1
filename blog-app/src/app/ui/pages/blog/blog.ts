import { Component, computed, signal } from '@angular/core';
import { Article } from '../../../models/article.model';
import { ArticleComponent } from '../../components/article/article';
import { ArticleFormComponent } from '../../components/article-form/article-form';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ArticleComponent, ArticleFormComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent {
  protected articles = signal<Article[]>([
    {
      id: 1,
      title: 'Minim anim pariatur magna duis sit et dolor inci',
      content: 'Sint occaecat deserunt aliquo do occaecat ut quis. Cupidatat magna fugiat quis sit duis est in volup',
      date: 'Oct 16, 2025'
    },
    {
      id: 2,
      title: 'Esse ad duis occaecat exercitation',
      content: 'Exercitation in aliqua pariatur. Voluptate deserunt mollit ullamco.',
      date: 'Oct 10, 2025'
    },
    {
      id: 3,
      title: 'Dolor sit amet consectetur adipiscing',
      content: 'Fugiat Lorem veniam cillum officia nisi. Nulla dolore magna minim.',
      date: 'Oct 05, 2025'
    }
  ]);

  protected showForm = signal(false);
  protected showStats = signal(false);
  protected editingArticle = signal<Article | null>(null);
  protected articleCount = computed(() => this.articles().length);

  protected toggleForm(): void {
    this.showForm.update(v => !v);
    if (this.showForm()) {
      this.editingArticle.set(null);
    }
  }

  protected toggleStats(): void {
    this.showStats.update(v => !v);
  }

  protected onArticleEdit(article: Article): void {
    this.editingArticle.set(article);
    this.showForm.set(true);
  }

  protected onArticleSubmit(article: Article): void {
    if (this.editingArticle()) {
      this.articles.update(list => list.map(a => (a.id === article.id ? article : a)));
      this.editingArticle.set(null);
    } else {
      this.articles.update(list => [...list, article]);
    }
    this.showForm.set(false);
  }

  protected onFormCancel(): void {
    this.editingArticle.set(null);
    this.showForm.set(false);
  }

  protected onArticleDelete(id: number): void {
    this.articles.update(list => list.filter(a => a.id !== id));
  }
}
