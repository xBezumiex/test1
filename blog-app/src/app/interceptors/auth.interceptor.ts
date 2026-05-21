import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthStoreService } from '../services/auth/auth-store.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthStoreService).token();
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};
