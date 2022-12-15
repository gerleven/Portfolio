import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FooterComponent } from './global-components/footer/footer.component';
import { AngularAppsHomeComponent } from './modules/angular-apps/angular-apps-page-view/angular-apps-home.component';
import { PageViewComponent } from './global-components/page-view/page-view.component';
import { AboutMeComponent } from './modules/about-me/about-me-page-view/about-me.component';
import { CvResumeHomeComponent } from './modules/cv-resume/cv-resume-page-view/cv-resume-home.component';
import { ReactAppsHomeComponent } from './modules/react-apps/react-apps-page-view/react-apps-home.component';
import { AboutMeHomePageComponent } from './modules/about-me/pages/about-me-home-page/about-me-home-page.component';
import { AboutMePageComponent } from './modules/about-me/pages/about-me-page/about-me-page.component';
import { AboutThisProjectPageComponent } from './modules/about-me/pages/about-this-project-page/about-this-project-page.component';
import { PokeApiComponent } from './modules/angular-apps/pages/poke-api/poke-api.component';
import { LazyloadExampleAppComponent } from './modules/angular-apps/pages/lazyload-example-app/lazyload-example-app.component';
import { ReactAppsHomePageComponent } from './modules/react-apps/pages/react-apps-home-page/react-apps-home-page.component';
import { DynamicScheduleComponent } from './modules/react-apps/pages/dynamic-schedule/dynamic-schedule.component';
import { GymRoutineGeneratorComponent } from './modules/react-apps/pages/gym-routine-generator/gym-routine-generator.component';
import { GymRoutineComponent } from './modules/react-apps/pages/gym-routine/gym-routine.component';
import { MySongsComponent } from './modules/react-apps/pages/my-songs/my-songs.component';
import { ResumePageComponent } from './modules/cv-resume/pages/resume-page/resume-page.component';
import { CvPageComponent } from './modules/cv-resume/pages/cv-page/cv-page.component';
import { CvResumeHomePageComponent } from './modules/cv-resume/pages/cv-resume-home-page/cv-resume-home-page.component';
import { AngularAppsHomePageComponent } from './modules/angular-apps/pages/angular-apps-home-page/angular-apps-home-page.component';
import { WeatherApiComponent } from './modules/angular-apps/pages/weather-api/weather-api.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageViewComponent,
    AboutMeComponent,
    CvResumeHomeComponent,
    AngularAppsHomeComponent,
    ReactAppsHomeComponent,
    AboutMeHomePageComponent,
    AboutMePageComponent,
    AboutThisProjectPageComponent,
    PokeApiComponent,
    LazyloadExampleAppComponent,
    WeatherApiComponent,
    AngularAppsHomePageComponent,
    CvResumeHomePageComponent,
    CvPageComponent,
    ResumePageComponent,
    MySongsComponent,
    GymRoutineComponent,
    GymRoutineGeneratorComponent,
    DynamicScheduleComponent,
    ReactAppsHomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    PanelMenuModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//ng deploy --base-href=/Portfolio/
