import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../../models/article.model';

@Component({
  selector: 'app-featured-articles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-articles.html',
  styleUrl: './featured-articles.scss'
})
export class FeaturedArticlesComponent {
  public articles = input<Article[]>([]);
}
