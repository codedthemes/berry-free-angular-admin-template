// Angular import
import { AfterViewInit, Component, effect, inject } from '@angular/core';
import { CommonModule, Location, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

// Project import
import { ConfigurationComponent } from './configuration/configuration.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { LayoutStateService } from '../../shared/service/layout-state.service';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, NavigationComponent, NavBarComponent, ConfigurationComponent, RouterModule, BreadcrumbComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements AfterViewInit {
  private location = inject(Location);
  private locationStrategy = inject(LocationStrategy);
  cdr = inject(ChangeDetectorRef);
  private layoutState = inject(LayoutStateService);

  // public props
  currentLayout!: string;
  navCollapsed = false;
  navCollapsedMob = false;
  windowWidth!: number;

  // Constructor
  constructor() {
    effect(() => {
      this.navCollapsedMob = this.layoutState.navCollapsedMob();
      this.cdr.detectChanges();
    });
  }

  // life cycle hook

  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
    this.cdr.detectChanges();
  }

  // private method
  private isThemeLayout(layout: string) {
    this.currentLayout = layout;
  }

  // public method
  navMobClick() {
    this.layoutState.toggleNavCollapsedMob();
    if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('navbar-collapsed')) {
      document.querySelector('app-navigation.pc-sidebar')?.classList.remove('navbar-collapsed');
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  closeMenu() {
    this.layoutState.toggleNavCollapsedMob();
  }
}
