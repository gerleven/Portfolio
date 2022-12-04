import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactAppsRoutingModule } from './react-apps-routing.module';
import { MySongsComponent } from './my-songs/my-songs.component';
import { GymRoutineComponent } from './gym-routine/gym-routine.component';
import { GymRoutineGeneratorComponent } from './gym-routine-generator/gym-routine-generator.component';
import { DynamicScheduleComponent } from './dynamic-schedule/dynamic-schedule.component';
import { ReactAppsHomeComponent } from './react-apps-home/react-apps-home.component';

@NgModule({
  declarations: [
    MySongsComponent,
    GymRoutineComponent,
    GymRoutineGeneratorComponent,
    DynamicScheduleComponent,
    ReactAppsHomeComponent
  ],
  imports: [
    CommonModule,
    ReactAppsRoutingModule
  ]
})
export class ReactAppsModule { }
