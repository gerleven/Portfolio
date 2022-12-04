import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAppsRoutingModule } from './my-apps-routing.module';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { MySongsComponent } from './my-songs/my-songs.component';
import { PokeApiComponent } from './poke-api/poke-api.component';
import { GymRoutineComponent } from './gym-routine/gym-routine.component';
import { GymRoutineGeneratorComponent } from './gym-routine-generator/gym-routine-generator.component';
import { DynamicScheduleComponent } from './dynamic-schedule/dynamic-schedule.component';
import { LazyloadExampleComponent } from './lazyload-example/lazyload-example.component';


@NgModule({
  declarations: [
    MyAppsComponent,
    MySongsComponent,
    PokeApiComponent,
    GymRoutineComponent,
    GymRoutineGeneratorComponent,
    DynamicScheduleComponent,
    LazyloadExampleComponent
  ],
  imports: [
    CommonModule,
    MyAppsRoutingModule
  ]
})
export class MyAppsModule { }
