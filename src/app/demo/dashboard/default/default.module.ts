// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project Import
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, DefaultRoutingModule, SharedModule, NgApexchartsModule]
})
export class DefaultModule {}
