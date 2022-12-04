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
import { AngularAppsHomeComponent } from './modules/angular-apps/angular-apps-home/angular-apps-home.component';
import { ReactAppsHomeComponent } from './modules/react-apps/react-apps-home/react-apps-home.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, AngularAppsHomeComponent, ReactAppsHomeComponent],
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
