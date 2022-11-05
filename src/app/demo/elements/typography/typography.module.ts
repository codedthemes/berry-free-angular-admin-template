import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';

@NgModule({
  declarations: [TypographyComponent],
  imports: [CommonModule, TypographyRoutingModule]
})
export class TypographyModule {}
