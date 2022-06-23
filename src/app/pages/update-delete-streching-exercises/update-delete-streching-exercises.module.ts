import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDeleteStrechingExercisesPageRoutingModule } from './update-delete-streching-exercises-routing.module';

import { UpdateDeleteStrechingExercisesPage } from './update-delete-streching-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDeleteStrechingExercisesPageRoutingModule
  ],
  declarations: [UpdateDeleteStrechingExercisesPage]
})
export class UpdateDeleteStrechingExercisesPageModule {}
