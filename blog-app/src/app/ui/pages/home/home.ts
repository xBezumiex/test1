import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  protected featuredArticles: Article[] = [
    {
      id: 1,
      title: 'Paris secrets',
      content: 'Sint occaecat deserunt aliquo do occaecat at quis. Cupidatat magna fugiat quis at dolé est in volup',
      date: 'Oct 16, 2025'
    },
    {
      id: 2,
      title: 'Oceanic feeling',
      content: 'Sint occaecat deserunt aliquo do occaecat at quis. Cupidatat magna fugiat quis at dolé est in volup',
      date: 'Oct 10, 2025'
    }
  ];
}
