import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeHomePageComponent } from './pages/about-me-home-page/about-me-home-page.component';


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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
