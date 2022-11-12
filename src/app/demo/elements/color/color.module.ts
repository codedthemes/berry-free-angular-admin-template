import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorRoutingModule } from './color-routing.module';
import { ColorComponent } from './color.component';

@NgModule({
  declarations: [ColorComponent],
  imports: [CommonModule, ColorRoutingModule]
})
export class ColorModule {}
