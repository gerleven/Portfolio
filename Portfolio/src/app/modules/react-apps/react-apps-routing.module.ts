import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicScheduleComponent } from './dynamic-schedule/dynamic-schedule.component';
import { GymRoutineGeneratorComponent } from './gym-routine-generator/gym-routine-generator.component';
import { GymRoutineComponent } from './gym-routine/gym-routine.component';
import { MySongsComponent } from './my-songs/my-songs.component';

const routes: Routes = [
  {
    path: "my-songs",
    component: MySongsComponent,
  }
  ,
  {
    path: "gym-routine",
    component: GymRoutineGeneratorComponent,
  }
  ,
  {
    path: "gym-routine-generator",
    component: GymRoutineComponent,
  }
  ,
  {
    path: "dynamic-schedule",
    component: DynamicScheduleComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactAppsRoutingModule { }
