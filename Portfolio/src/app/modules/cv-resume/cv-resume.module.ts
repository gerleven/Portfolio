import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvResumeRoutingModule } from './cv-resume-routing.module';
import { CvResumeHomePageComponent } from './pages/cv-resume-home-page/cv-resume-home-page.component';
import { CvPageComponent } from './pages/cv-page/cv-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';


@NgModule({
  declarations: [
  
    CvResumeHomePageComponent,
       CvPageComponent,
       ResumePageComponent
  ],
  imports: [
    CommonModule,
    CvResumeRoutingModule
  ]
})
export class CvResumeModule { }
