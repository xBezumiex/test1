import { Component, computed, inject, OnInit } from '@angular/core';
import { ARTICLES_SERVICE } from '../../../services/articles/articles-service.token';
import { ArticlesStoreService } from '../../../services/articles-store.service';
import { HeroSectionComponent } from './hero-section/hero-section';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles';
import { SkillsSectionComponent } from './skills-section/skills-section';
import { WorkSectionComponent } from './work-section/work-section';
import { HobbySectionComponent } from './hobby-section/hobby-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    FeaturedArticlesComponent,
    SkillsSectionComponent,
    WorkSectionComponent,
    HobbySectionComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  private service = inject(ARTICLES_SERVICE);
  private store = inject(ArticlesStoreService);

  protected featuredArticles = computed(() => this.store.articles().slice(0, 2));

  ngOnInit(): void {
    if (this.store.articles().length === 0) {
      this.service.getArticles(1).subscribe(result => {
        this.store.saveArticles(result.articles);
      });
    }
  }
}
