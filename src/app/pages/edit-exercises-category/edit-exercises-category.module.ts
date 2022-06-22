import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditExercisesCategoryPageRoutingModule } from './edit-exercises-category-routing.module';

import { EditExercisesCategoryPage } from './edit-exercises-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditExercisesCategoryPageRoutingModule
  ],
  declarations: [EditExercisesCategoryPage]
})
export class EditExercisesCategoryPageModule {}
