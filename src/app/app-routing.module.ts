import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        loadChildren: () => import('./demo/elements/typography/typography.module').then((m) => m.TypographyModule)
      },
      {
        path: 'color',
        loadChildren: () => import('./demo/elements/color/color.module').then((m) => m.ColorModule)
      },
      {
        path: 'tabler',
        loadChildren: () => import('./demo/elements/tabler/tabler.module').then((m) => m.TablerModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/sample-page/sample-page.module').then((module) => module.SamplePageModule)
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
