import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';

export interface ICategoriesService {
  getCategories(): Observable<Category[]>;
  addCategory(name: string): Observable<Category>;
}
