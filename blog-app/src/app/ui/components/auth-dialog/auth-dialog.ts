import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AUTH_SERVICE } from '../../../services/auth/auth-service.token';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './auth-dialog.html',
  styleUrl: './auth-dialog.scss'
})
export class AuthDialogComponent {
  private dialogRef = inject(MatDialogRef<AuthDialogComponent>);
  private authService = inject(AUTH_SERVICE);
  private fb = inject(FormBuilder);

  protected mode = signal<AuthMode>('login');
  protected loading = signal(false);
  protected error = signal('');
  protected hidePassword = signal(true);

  protected loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  protected registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  protected switchMode(mode: AuthMode): void {
    this.mode.set(mode);
    this.error.set('');
    this.loginForm.reset();
    this.registerForm.reset();
  }

  protected onLogin(): void {
    if (this.loginForm.invalid) return;
    this.loading.set(true);
    this.error.set('');
    const { login, password } = this.loginForm.value;
    this.authService.login({ login: login!, password: password! }).subscribe({
      next: () => {
        this.loading.set(false);
        this.dialogRef.close(true);
      },
      error: (err: Error) => {
        this.loading.set(false);
        this.error.set(
          (err as unknown as { error?: { message?: string } })?.error?.message
            ?? err.message
            ?? 'Ошибка входа'
        );
      }
    });
  }

  protected onRegister(): void {
    if (this.registerForm.invalid) return;
    this.loading.set(true);
    this.error.set('');
    const { username, email, password } = this.registerForm.value;
    this.authService
      .register({ username: username!, email: email!, password: password! })
      .subscribe({
        next: () => {
          this.loading.set(false);
          this.dialogRef.close(true);
        },
        error: (err: Error) => {
          this.loading.set(false);
          this.error.set(
            (err as unknown as { error?: { message?: string } })?.error?.message
              ?? err.message
              ?? 'Ошибка регистрации'
          );
        }
      });
  }
}
