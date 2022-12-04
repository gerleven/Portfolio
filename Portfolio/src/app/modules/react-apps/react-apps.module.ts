import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactAppsRoutingModule } from './react-apps-routing.module';
import { DynamicScheduleComponent } from './pages/dynamic-schedule/dynamic-schedule.component';
import { MySongsComponent } from './pages/my-songs/my-songs.component';
import { GymRoutineComponent } from './pages/gym-routine/gym-routine.component';
import { GymRoutineGeneratorComponent } from './pages/gym-routine-generator/gym-routine-generator.component';
import { ReactAppsHomePageComponent } from './pages/react-apps-home-page/react-apps-home-page.component';

@NgModule({
  declarations: [
    MySongsComponent,
    GymRoutineComponent,
    GymRoutineGeneratorComponent,
    DynamicScheduleComponent,
    ReactAppsHomePageComponent,
  ],
  imports: [CommonModule, ReactAppsRoutingModule],
})
export class ReactAppsModule {}
