import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AirCualityComponent } from './air-cuality/air-cuality.component';
import { UvRaysComponent } from './uv-rays/uv-rays.component';
import { HealthTipsComponent } from './health-tips/health-tips.component';
import { PhysicalActivitiesComponent } from './physical-activities/physical-activities.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    AirCualityComponent,
    UvRaysComponent,
    HealthTipsComponent,
    PhysicalActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
