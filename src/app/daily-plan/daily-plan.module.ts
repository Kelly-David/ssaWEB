import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyPlanComponent } from './daily-plan/daily-plan.component';



@NgModule({
  declarations: [
    DailyPlanComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DailyPlanComponent
  ]
})
export class DailyPlanModule { }
