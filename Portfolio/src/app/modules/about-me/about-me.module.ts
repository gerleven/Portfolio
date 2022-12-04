import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeHomePageComponent } from './pages/about-me-home-page/about-me-home-page.component';




@NgModule({
  declarations: [
    AboutMeHomePageComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
