import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadExampleAppComponent } from './lazyload-example-app/lazyload-example-app.component';
// import { AngularAppsHomeComponent } from './angular-apps-home/angular-apps-home.component';
import { PokeApiComponent } from './poke-api/poke-api.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';

const routes: Routes = [
  {
    path: "weather-api",
    component: WeatherApiComponent,
  }
  ,
  {
    path: "lazyload-example-app",
    component: LazyloadExampleAppComponent,
  }
  ,
  {
    path: "poke-api",
    component: PokeApiComponent,
  }
  ,
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularAppsRoutingModule { }
