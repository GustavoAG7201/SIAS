import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirCualityComponent } from './air-cuality/air-cuality.component';
import { UvRaysComponent } from './uv-rays/uv-rays.component';
import { HealthTipsComponent } from './health-tips/health-tips.component'; 
import { PhysicalActivitiesComponent } from './physical-activities/physical-activities.component';
import path from 'path';


const routes: Routes = [
  {path:'air-quality', component: AirCualityComponent},
  {path:'uv-rays', component: UvRaysComponent},
  {path:'health-tips', component: HealthTipsComponent},
  {path:'physical-activities', component: PhysicalActivitiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
