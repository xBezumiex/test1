import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../../models/article.model';
import { ArticleComponent } from '../../components/article/article';
import { ArticleFormComponent } from '../../components/article-form/article-form';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, ArticleComponent, ArticleFormComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent {
  articles: Article[] = [
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
  ];

  showForm: boolean = false;
  showStats: boolean = false;
  editingArticle: Article | null = null;

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.editingArticle = null;
    }
  }

  toggleStats(): void {
    this.showStats = !this.showStats;
  }

  onArticleEdit(article: Article): void {
    this.editingArticle = article;
    this.showForm = true;
  }

  onArticleSubmit(article: Article): void {
    if (this.editingArticle) {
      this.articles = this.articles.map(a => (a.id === article.id ? article : a));
      this.editingArticle = null;
    } else {
      this.articles.push(article);
    }
    this.showForm = false;
  }

  onFormCancel(): void {
    this.editingArticle = null;
    this.showForm = false;
  }

  onArticleDelete(id: number): void {
    this.articles = this.articles.filter(article => article.id !== id);
  }

  get articleCount(): number {
    return this.articles.length;
  }
}
