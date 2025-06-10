// Angular import
import { Component, Input, output, inject } from '@angular/core';
import { Router } from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-logo',
  imports: [SharedModule],
  templateUrl: './nav-logo.component.html',
  styleUrl: './nav-logo.component.scss'
})
export class NavLogoComponent {
  router = inject(Router);

  // public props
  @Input() navCollapsed!: boolean;
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
      this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
  }

  returnToHome() {
    this.router.navigate(['/default']);
  }
}
