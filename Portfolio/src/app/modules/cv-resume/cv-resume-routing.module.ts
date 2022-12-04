import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvPageComponent } from './pages/cv-page/cv-page.component';
import { CvResumeHomePageComponent } from './pages/cv-resume-home-page/cv-resume-home-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "cv-resume-home-page",
    pathMatch: "full"
  }
  ,
  {
    path: "cv-resume-home-page",
    component: CvResumeHomePageComponent,
  }
  ,
  {
    path: "cv-page",
    component: CvPageComponent,
  }
  ,
  {
    path: "resume-page",
    component: ResumePageComponent,
  }
  ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvResumeRoutingModule { }
