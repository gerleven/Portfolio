import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/about-me/about-me.component';
import { ArtSectionComponent } from './modules/art-section/art-section/art-section.component';
import { MyAppsComponent } from './modules/my-apps/my-apps/my-apps.component';

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
    path: 'art-section',
    component: ArtSectionComponent,
    loadChildren: () =>
      import('./modules/art-section/art-section.module').then((m) => m.ArtSectionModule),
  },
  {
    path: 'my-apps',
    component: MyAppsComponent,
    loadChildren: () =>
      import('./modules/my-apps/my-apps.module').then((m) => m.MyAppsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
