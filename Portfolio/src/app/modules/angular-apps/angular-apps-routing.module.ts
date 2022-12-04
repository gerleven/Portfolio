import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularAppsHomePageComponent } from './pages/angular-apps-home-page/angular-apps-home-page.component';
import { LazyloadExampleAppComponent } from './pages/lazyload-example-app/lazyload-example-app.component';
import { PokeApiComponent } from './pages/poke-api/poke-api.component';
import { WeatherApiComponent } from './pages/weather-api/weather-api.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular-apps-home-page',
    pathMatch: 'full',
  },
  {
    path: 'angular-apps-home-page',
    component: AngularAppsHomePageComponent,
  },
  {
    path: 'weather-api',
    component: WeatherApiComponent,
  },
  {
    path: 'lazyload-example-app',
    component: LazyloadExampleAppComponent,
  },
  {
    path: 'poke-api',
    component: PokeApiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularAppsRoutingModule {}
