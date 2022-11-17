import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicScheduleComponent } from './dynamic-schedule/dynamic-schedule.component';
import { GymRoutineGeneratorComponent } from './gym-routine-generator/gym-routine-generator.component';
import { GymRoutineComponent } from './gym-routine/gym-routine.component';
import { MySongsComponent } from './my-songs/my-songs.component';
import { PokeApiComponent } from './poke-api/poke-api.component';

const routes: Routes = [
  {
    path: 'my-songs',
    component: MySongsComponent,
  },
  {
    path: 'poke-api',
    component: PokeApiComponent,
  },
  {
    path: 'gym-routine',
    component: GymRoutineComponent,
  },
  {
    path: 'gym-routine-generator',
    component: GymRoutineGeneratorComponent,
  },
  {
    path: 'dynamic-schedule',
    component: DynamicScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAppsRoutingModule { }
