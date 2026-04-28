import { Component, input, output } from '@angular/core';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class ArticleComponent {
  public article = input.required<Article>();
  public deleteArticle = output<number>();
  public editArticle = output<Article>();

  protected onDelete(): void {
    this.deleteArticle.emit(this.article().id);
  }

  protected onEdit(): void {
    this.editArticle.emit(this.article());
  }
}
