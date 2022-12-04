import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeHomePageComponent } from './pages/about-me-home-page/about-me-home-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';




@NgModule({
  declarations: [
    AboutMeHomePageComponent,
    AboutMePageComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
