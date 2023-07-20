// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { CardComponent } from './card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule {}
