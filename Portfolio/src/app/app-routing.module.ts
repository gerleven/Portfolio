import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/about-me/about-me.component';
import { AngularAppsHomeComponent } from './modules/angular-apps/angular-apps-home/angular-apps-home.component';
import { ReactAppsHomeComponent } from './modules/react-apps/react-apps-home/react-apps-home.component';

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
    path: 'cv',
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
  {
    path: 'react-apps',
    component: ReactAppsHomeComponent,
    loadChildren: () =>
      import('./modules/react-apps/react-apps.module').then((m) => m.ReactAppsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
