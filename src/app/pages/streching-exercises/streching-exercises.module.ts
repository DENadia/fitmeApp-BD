import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrechingExercisesPageRoutingModule } from './streching-exercises-routing.module';

import { StrechingExercisesPage } from './streching-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrechingExercisesPageRoutingModule
  ],
  declarations: [StrechingExercisesPage]
})
export class StrechingExercisesPageModule {}
