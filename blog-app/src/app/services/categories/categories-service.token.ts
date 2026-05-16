import { InjectionToken } from '@angular/core';
import { ICategoriesService } from './categories-service.interface';

export const CATEGORY_SERVICE = new InjectionToken<ICategoriesService>('CATEGORY_SERVICE');
