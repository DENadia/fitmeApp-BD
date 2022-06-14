import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { WorkoutExercisesComponent } from './workout-exercises.component';

@NgModule({
  declarations: [WorkoutExercisesComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
     path: '', component:WorkoutExercisesComponent
    }])
  ]
})
export class WorkoutExercisesModule { }
