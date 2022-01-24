import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
  declarations: [
    DasboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashBoardModule { }



