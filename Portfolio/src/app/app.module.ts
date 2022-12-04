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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageViewComponent,
    AboutMeComponent,
    CvResumeHomeComponent,
    AngularAppsHomeComponent,
    ReactAppsHomeComponent,
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
