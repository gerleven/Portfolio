import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/about-me-page-view/about-me.component';
import { AngularAppsHomeComponent } from './modules/angular-apps/angular-apps-page-view/angular-apps-home.component';
import { CvResumeHomeComponent } from './modules/cv-resume/cv-resume-page-view/cv-resume-home.component';
import { ReactAppsHomeComponent } from './modules/react-apps/react-apps-page-view/react-apps-home.component';

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
    component: CvResumeHomeComponent,
    loadChildren: () =>
      import('./modules/cv-resume/cv-resume.module').then(
        (m) => m.CvResumeModule
      ),
  },
  {
    path: 'angular-apps',
    component: AngularAppsHomeComponent,
    loadChildren: () =>
      import('./modules/angular-apps/angular-apps.module').then(
        (m) => m.AngularAppsModule
      ),
  },
  {
    path: 'react-apps',
    component: ReactAppsHomeComponent,
    loadChildren: () =>
      import('./modules/react-apps/react-apps.module').then(
        (m) => m.ReactAppsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
