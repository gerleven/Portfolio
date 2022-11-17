import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { CvResumeComponent } from './cv-resume/cv-resume.component';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    CvResumeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
