import { computed, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

@Injectable({ providedIn: 'root' })
export class AuthStoreService {
  readonly user = signal<User | null>(null);
  readonly token = signal<string | null>(null);
  readonly isLoggedIn = computed(() => this.user() !== null);

  constructor() {
    const token = localStorage.getItem(TOKEN_KEY);
    const userRaw = localStorage.getItem(USER_KEY);
    if (token && userRaw) {
      this.token.set(token);
      this.user.set(JSON.parse(userRaw) as User);
    }
  }

  setAuth(token: string, user: User): void {
    this.token.set(token);
    this.user.set(user);
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  clearAuth(): void {
    this.token.set(null);
    this.user.set(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
}
