import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementColorComponent } from './demo/elements/element-color/element-color.component';
import { IconTablerComponent } from './demo/elements/icon-tabler/icon-tabler.component';
import { TypographyComponent } from './demo/elements/typography/typography.component';
import { SamplePageComponent } from './demo/sample-page/sample-page.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/default',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadChildren: () => import('./demo/dashboard/default/default.module').then((m) => m.DefaultModule)
      },
      {
        path: 'typography',
        component: TypographyComponent
      },
      {
        path: 'color',
        component: ElementColorComponent
      },
      {
        path: 'tabler',
        component: IconTablerComponent
      },
      {
        path: 'sample-page',
        component: SamplePageComponent
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
