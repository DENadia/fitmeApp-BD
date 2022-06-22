import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditExercisesCategoryPage } from './edit-exercises-category.page';

const routes: Routes = [
  {
    path: '',
    component: EditExercisesCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditExercisesCategoryPageRoutingModule {}
