import { Directive, effect, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthStoreService } from '../services/auth/auth-store.service';

@Directive({
  selector: '[appHasRole]',
  standalone: true
})
export class HasRoleDirective {
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);
  private authStore = inject(AuthStoreService);
  private requiredRoles: string[] = [];
  private hasView = false;

  @Input() set appHasRole(roles: string | string[]) {
    this.requiredRoles = Array.isArray(roles) ? roles : [roles];
    this.updateView();
  }

  constructor() {
    effect(() => {
      this.authStore.user();
      this.updateView();
    });
  }

  private updateView(): void {
    const userRole = this.authStore.user()?.role;
    const hasAccess = this.requiredRoles.length > 0
      ? (userRole ? this.requiredRoles.includes(userRole) : false)
      : false;

    if (hasAccess && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!hasAccess && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
