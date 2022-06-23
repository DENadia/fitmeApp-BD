import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDeleteYogaExercisesPageRoutingModule } from './update-delete-yoga-exercises-routing.module';

import { UpdateDeleteYogaExercisesPage } from './update-delete-yoga-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDeleteYogaExercisesPageRoutingModule
  ],
  declarations: [UpdateDeleteYogaExercisesPage]
})
export class UpdateDeleteYogaExercisesPageModule {}
