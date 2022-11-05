import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePageComponent } from './sample-page.component';

const routes: Routes = [
  {
    path: '',
    component: SamplePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePageRoutingModule {}
