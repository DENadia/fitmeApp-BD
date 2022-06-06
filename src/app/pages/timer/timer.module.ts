import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TimerComponent } from './timer.component';
import {NgxGaugeModule} from 'ngx-gauge';
@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxGaugeModule,
    RouterModule.forChild([
      {
        path:'', component:TimerComponent
      }
    ])
  ]
})
export class TimerModule { }




