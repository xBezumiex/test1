import { inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User, UserRole } from '../../models/user.model';
import { AuthStoreService } from './auth-store.service';
import { IAuthService, LoginCredentials, RegisterData, AuthResult } from './auth-service.interface';

const USERS_KEY = 'auth_users';

interface StoredUser extends User {
  password: string;
}

const DEFAULT_ADMIN: StoredUser = {
  id: 'admin-1',
  username: 'admin',
  email: 'admin@admin.com',
  password: 'admin123',
  role: 'admin' as UserRole
};

@Injectable()
export class AuthLocalService implements IAuthService {
  private store = inject(AuthStoreService);

  private getUsers(): StoredUser[] {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) {
      localStorage.setItem(USERS_KEY, JSON.stringify([DEFAULT_ADMIN]));
      return [DEFAULT_ADMIN];
    }
    return JSON.parse(raw) as StoredUser[];
  }

  login({ login, password }: LoginCredentials): Observable<AuthResult> {
    const found = this.getUsers().find(
      u => (u.username === login || u.email === login) && u.password === password
    );
    if (!found) return throwError(() => new Error('Неверный логин или пароль'));

    const { password: _, ...publicUser } = found;
    const token = btoa(JSON.stringify(publicUser));
    this.store.setAuth(token, publicUser);
    return of({ access_token: token, user: publicUser });
  }

  register({ username, email, password }: RegisterData): Observable<AuthResult> {
    const users = this.getUsers();
    if (users.find(u => u.username === username || u.email === email)) {
      return throwError(() => new Error('Пользователь уже существует'));
    }
    const newUser: StoredUser = {
      id: Date.now().toString(),
      username,
      email,
      password,
      role: 'user' as UserRole
    };
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    return this.login({ login: username, password });
  }

  logout(): Observable<void> {
    this.store.clearAuth();
    return of(undefined);
  }
}
