// Angular Imports
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
import { CardComponent } from './components/card/card.component';

// third party
import { NgScrollbarModule } from 'ngx-scrollbar';

// bootstrap import
import { NgbDropdownModule, NgbNavModule, NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

export const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CardComponent,
  NgbDropdownModule,
  NgbNavModule,
  NgbModule,
  NgbCollapseModule,
  NgScrollbarModule
];
