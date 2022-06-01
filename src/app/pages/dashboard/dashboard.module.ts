import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { 
        path: '', component: DashboardComponent
      }
    ])
  ]
})
export class DashboardModule { }
