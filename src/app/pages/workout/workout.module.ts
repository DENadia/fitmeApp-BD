import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { WorkoutComponent } from './workout.component';

@NgModule({
  declarations: [WorkoutComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
     path: '', component:WorkoutComponent
    }])
  ]
})
export class WorkoutModule { }
