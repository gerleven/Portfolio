import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtSectionRoutingModule } from './art-section-routing.module';
import { ArtSectionComponent } from './art-section/art-section.component';


@NgModule({
  declarations: [
    ArtSectionComponent
  ],
  imports: [
    CommonModule,
    ArtSectionRoutingModule
  ]
})
export class ArtSectionModule { }
