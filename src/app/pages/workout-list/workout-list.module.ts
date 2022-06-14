import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { WorkoutListComponent } from './workout-list.component';

@NgModule({
  declarations: [WorkoutListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
     path: '', component:WorkoutListComponent
    }])
  ]
})
export class WorkoutListModule { }
