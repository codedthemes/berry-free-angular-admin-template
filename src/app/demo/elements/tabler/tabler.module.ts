import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablerRoutingModule } from './tabler-routing.module';
import { TablerComponent } from './tabler.component';

@NgModule({
  declarations: [TablerComponent],
  imports: [CommonModule, TablerRoutingModule]
})
export class TablerModule {}
