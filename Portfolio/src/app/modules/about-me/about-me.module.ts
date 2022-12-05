import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeHomePageComponent } from './pages/about-me-home-page/about-me-home-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { AboutThisProjectPageComponent } from './pages/about-this-project-page/about-this-project-page.component';




@NgModule({
  declarations: [
    AboutMeHomePageComponent,
    AboutMePageComponent,
    AboutThisProjectPageComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
