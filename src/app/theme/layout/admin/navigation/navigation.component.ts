// Angular import
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  // public props
  @Output() onNavCollapsedMob = new EventEmitter();
  @Output() onSubmenuCollapse = new EventEmitter();
  navCollapsedMob;
  windowWidth: number;
  public themeLayout!: string;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
    this.navCollapsedMob = false;
  }

  // Life cycle events
  ngOnInit() {}

  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.onNavCollapsedMob.emit();
    }
  }
}
