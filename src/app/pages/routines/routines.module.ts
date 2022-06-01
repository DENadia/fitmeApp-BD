import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutinesComponent } from './routines.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [RoutinesComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path:'', component: RoutinesComponent
      }
    ])
  ]
})
export class RoutinesModule { }
