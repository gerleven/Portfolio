import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularAppsRoutingModule } from './angular-apps-routing.module';
import { LazyloadExampleAppComponent } from './pages/lazyload-example-app/lazyload-example-app.component';
import { PokeApiComponent } from './pages/poke-api/poke-api.component';
import { WeatherApiComponent } from './pages/weather-api/weather-api.component';
import { AngularAppsHomePageComponent } from './pages/angular-apps-home-page/angular-apps-home-page.component';


@NgModule({
  declarations: [
    PokeApiComponent,
    LazyloadExampleAppComponent,
    WeatherApiComponent,
    AngularAppsHomePageComponent,
  ],
  imports: [CommonModule, AngularAppsRoutingModule],
})
export class AngularAppsModule {}
