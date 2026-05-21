import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';
import { AuthStoreService } from './auth-store.service';
import { IAuthService, LoginCredentials, RegisterData, AuthResult } from './auth-service.interface';

@Injectable()
export class AuthHttpService implements IAuthService {
  private http = inject(HttpClient);
  private store = inject(AuthStoreService);
  private base = environment.apiUrl;

  login(credentials: LoginCredentials): Observable<AuthResult> {
    return this.http
      .post<AuthResult>(`${this.base}/auth/login`, credentials)
      .pipe(tap(res => this.store.setAuth(res.access_token, res.user)));
  }

  register(data: RegisterData): Observable<AuthResult> {
    return this.http
      .post<{ message: string; user: User }>(`${this.base}/users/register`, data)
      .pipe(
        switchMap(() =>
          this.login({ login: data.username, password: data.password })
        )
      );
  }

  logout(): Observable<void> {
    return this.http
      .post<void>(`${this.base}/auth/logout`, {})
      .pipe(tap(() => this.store.clearAuth()));
  }
}
