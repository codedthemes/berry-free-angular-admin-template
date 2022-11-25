// Angular import
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-logo',
  templateUrl: './nav-logo.component.html',
  styleUrls: ['./nav-logo.component.scss']
})
export class NavLogoComponent {
  // public props
  @Input() navCollapsed: boolean;
  @Output() onNavCollapse = new EventEmitter();
  windowWidth: number;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
  }

  // public import
  navCollapse() {
    if (this.windowWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      this.onNavCollapse.emit();
    }
  }
}
