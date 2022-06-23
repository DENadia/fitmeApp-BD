import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStrechingExercisesPageRoutingModule } from './add-streching-exercises-routing.module';

import { AddStrechingExercisesPage } from './add-streching-exercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStrechingExercisesPageRoutingModule
  ],
  declarations: [AddStrechingExercisesPage]
})
export class AddStrechingExercisesPageModule {}
