// Angular import
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// third party import
import { SHARED_IMPORTS } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-right',
  imports: [...SHARED_IMPORTS, RouterModule],
  templateUrl: './nav-right.component.html',
  styleUrl: './nav-right.component.scss'
})
export class NavRightComponent {}
