import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutRoutinePageRoutingModule } from './workout-routine-routing.module';

import { WorkoutRoutinePage } from './workout-routine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutRoutinePageRoutingModule
  ],
  declarations: [WorkoutRoutinePage]
})
export class WorkoutRoutinePageModule {}
