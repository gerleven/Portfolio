import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicScheduleComponent } from './pages/dynamic-schedule/dynamic-schedule.component';
import { GymRoutineGeneratorComponent } from './pages/gym-routine-generator/gym-routine-generator.component';
import { GymRoutineComponent } from './pages/gym-routine/gym-routine.component';
import { MySongsComponent } from './pages/my-songs/my-songs.component';
import { ReactAppsHomePageComponent } from './pages/react-apps-home-page/react-apps-home-page.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "react-apps-home-page",
    pathMatch: "full"
  }
  ,
  {
    path: 'react-apps-home-page',
    component: ReactAppsHomePageComponent,
  },
  {
    path: 'my-songs',
    component: MySongsComponent,
  },
  {
    path: 'gym-routine',
    component: GymRoutineGeneratorComponent,
  },
  {
    path: 'gym-routine-generator',
    component: GymRoutineComponent,
  },
  {
    path: 'dynamic-schedule',
    component: DynamicScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactAppsRoutingModule {}
