import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { AuthStoreService } from '../../../services/auth/auth-store.service';
import { AUTH_SERVICE } from '../../../services/auth/auth-service.token';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  private dialog = inject(MatDialog);
  private authService = inject(AUTH_SERVICE);
  protected authStore = inject(AuthStoreService);

  protected openAuthDialog(): void {
    this.dialog.open(AuthDialogComponent, { width: '420px' });
  }

  protected logout(): void {
    this.authService.logout().subscribe();
  }
}
