import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Category } from '../../models/category.model';
import { ApiCategory } from '../../models/api.models';
import { ICategoriesService } from './categories-service.interface';

@Injectable()
export class CategoriesHttpService implements ICategoriesService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  getCategories(): Observable<Category[]> {
    return this.http.get<ApiCategory[]>(`${this.base}/categories`);
  }

  addCategory(name: string): Observable<Category> {
    return this.http.post<Category>(`${this.base}/categories`, { name });
  }
}
