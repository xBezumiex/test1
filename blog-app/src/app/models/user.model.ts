export type UserRole = 'user' | 'admin' | 'moderator';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
}
