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
  @Input() public article!: Article;
  @Output() public deleteArticle = new EventEmitter<number>();
  @Output() public editArticle = new EventEmitter<Article>();

  protected onDelete(): void {
    this.deleteArticle.emit(this.article.id);
  }

  protected onEdit(): void {
    this.editArticle.emit(this.article);
  }
}
