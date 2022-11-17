import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeModule } from './modules/about-me/about-me.module';
import { AboutMeComponent } from './modules/about-me/about-me/about-me.component';
import { CvResumeComponent } from './modules/about-me/cv-resume/cv-resume.component';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent,
    loadChildren: () =>
      import('./modules/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'cv-resume',
    component: CvResumeComponent,
    loadChildren: () =>
      import('./modules/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
