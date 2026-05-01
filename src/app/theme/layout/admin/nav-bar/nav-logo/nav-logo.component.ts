// Angular import
import { Component, output, inject, model } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

// project import
import { SHARED_IMPORTS } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-logo',
  imports: [...SHARED_IMPORTS, RouterLink],
  templateUrl: './nav-logo.component.html',
  styleUrl: './nav-logo.component.scss'
})
export class NavLogoComponent {
  router = inject(Router);

  // public props
  navCollapsed = model<boolean>(false);
  NavCollapse = output();
  windowWidth: number;
  themeMode!: boolean;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
  }

  // public method
  navCollapse() {
    if (this.windowWidth >= 1025) {
      this.navCollapsed.update((v) => !v);
      this.NavCollapse.emit();
    }
  }

  returnToHome() {
    this.router.navigate(['/default']);
  }
}
