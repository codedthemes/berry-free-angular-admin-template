// Angular import
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent {
  // public props
  NavCollapsedMob = output();

  navCollapsedMob() {
    this.NavCollapsedMob.emit();
  }
}
