import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeHomePageComponent } from './pages/about-me-home-page/about-me-home-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { AboutThisProjectPageComponent } from './pages/about-this-project-page/about-this-project-page.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "about-me-home-page",
    pathMatch: 'full',
  }
  ,
  {
    path: "about-me-home-page",
    component: AboutMeHomePageComponent,
  }
  ,
  {
    path: "about-me-page",
    component: AboutMePageComponent,
  }
  ,
  {
    path: "about-this-project",
    component: AboutThisProjectPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
