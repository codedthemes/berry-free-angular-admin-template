import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablerComponent } from './tabler.component';

const routes: Routes = [
  {
    path: '',
    component: TablerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablerRoutingModule {}
