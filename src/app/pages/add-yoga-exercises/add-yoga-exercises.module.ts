import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddYogaExercisesPageRoutingModule } from './add-yoga-exercises-routing.module';

import { AddYogaExercisesPage } from './add-yoga-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddYogaExercisesPageRoutingModule
  ],
  declarations: [AddYogaExercisesPage]
})
export class AddYogaExercisesPageModule {}
