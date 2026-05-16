import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../models/category.model';
import { ICategoriesService } from './categories-service.interface';

const STORAGE_KEY = 'blog_categories';

@Injectable()
export class CategoriesLocalService implements ICategoriesService {
  private getFromStorage(): Category[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Category[]) : [];
  }

  getCategories(): Observable<Category[]> {
    return of(this.getFromStorage());
  }

  addCategory(name: string): Observable<Category> {
    const all = this.getFromStorage();
    const existing = all.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (existing) return of(existing);
    const category: Category = { id: Date.now().toString(), name };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...all, category]));
    return of(category);
  }
}
