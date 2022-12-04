import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularAppsRoutingModule } from './angular-apps-routing.module';
import { PokeApiComponent } from './poke-api/poke-api.component';
import { LazyloadExampleAppComponent } from './lazyload-example-app/lazyload-example-app.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';

@NgModule({
  declarations: [
    PokeApiComponent,
    LazyloadExampleAppComponent,
    WeatherApiComponent
  ],
  imports: [
    CommonModule,
    AngularAppsRoutingModule
  ]
})
export class AngularAppsModule { }
