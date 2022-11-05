// Angular import
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BerryConfig } from 'src/app/app-config';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {
  // public props
  @Output() onNavCollapsedMob = new EventEmitter();
  config: any;
  navCollapsedMob;
  headerStyle: string;
  menuClass: boolean;
  collapseStyle: string;

  // Constructor
  constructor() {
    this.config = BerryConfig.config;
    this.navCollapsedMob = false;
    this.headerStyle = '';
    this.menuClass = false;
    this.collapseStyle = 'none';
  }

  // Life cycle events
  ngOnInit(): void {}
}
