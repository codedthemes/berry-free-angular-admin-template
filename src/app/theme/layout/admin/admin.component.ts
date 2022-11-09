// Angular import
import { Component, NgZone, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

// Project import
import { BerryConfig } from '../../../app-config';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // public props
  navCollapsed: boolean;
  navCollapsedMob: boolean;
  windowWidth: number;
  submenuCollapse: boolean;

  // Constructor
  constructor(private zone: NgZone, private location: Location, private locationStrategy: LocationStrategy) {
    let current_url = this.location.path();
    if (this.location['_baseHref']) {
      current_url = this.location['_baseHref'] + this.location.path();
    }

    if (current_url === this.location['_baseHref'] + '/layout/theme-compact' || current_url === this.location['_baseHref'] + '/layout/box')
      this.windowWidth = window.innerWidth;
    this.navCollapsed = this.windowWidth >= 1025 ? BerryConfig.isCollapse_menu : false;
    this.navCollapsedMob = false;
  }

  // Life cycle events
  ngOnInit() {}

  // public method
  navMobClick() {
    if (this.navCollapsedMob && (document.querySelector('app-navigation.coded-navbar') as HTMLDivElement).classList.contains('mob-open')) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
  }
}
