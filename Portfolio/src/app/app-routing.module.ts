import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/about-me/about-me.component';
import { AngularAppsHomeComponent } from './modules/angular-apps/angular-apps-home/angular-apps-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about-me',
    pathMatch: 'full',
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    loadChildren: () =>
      import('./modules/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'angular-apps',
    component: AngularAppsHomeComponent,
    loadChildren: () =>
      import('./modules/angular-apps/angular-apps.module').then((m) => m.AngularAppsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
