import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDeleteExercisePageRoutingModule } from './update-delete-exercise-routing.module';

import { UpdateDeleteExercisePage } from './update-delete-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDeleteExercisePageRoutingModule
  ],
  declarations: [UpdateDeleteExercisePage]
})
export class UpdateDeleteExercisePageModule {}
