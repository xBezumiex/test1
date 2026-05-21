import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Article } from '../../../models/article.model';
import { HasRoleDirective } from '../../../directives/has-role.directive';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink, MatIconModule, HasRoleDirective],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class ArticleComponent {
  public article = input.required<Article>();
  public deleteArticle = output<string>();
  public editArticle = output<Article>();

  protected onDelete(): void {
    this.deleteArticle.emit(this.article().id);
  }

  protected onEdit(): void {
    this.editArticle.emit(this.article());
  }
}
