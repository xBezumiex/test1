import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class ArticleComponent {
  @Input() article!: Article;
  @Output() deleteArticle = new EventEmitter<number>();
  @Output() editArticle = new EventEmitter<Article>();

  onDelete(): void {
    this.deleteArticle.emit(this.article.id);
  }

  onEdit(): void {
    this.editArticle.emit(this.article);
  }
}
