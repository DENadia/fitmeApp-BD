import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YogaExercisesPageRoutingModule } from './yoga-exercises-routing.module';

import { YogaExercisesPage } from './yoga-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YogaExercisesPageRoutingModule
  ],
  declarations: [YogaExercisesPage]
})
export class YogaExercisesPageModule {}
