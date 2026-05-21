import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

export interface LoginCredentials {
  login: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface AuthResult {
  access_token: string;
  user: User;
}

export interface IAuthService {
  login(credentials: LoginCredentials): Observable<AuthResult>;
  register(data: RegisterData): Observable<AuthResult>;
  logout(): Observable<void>;
}
