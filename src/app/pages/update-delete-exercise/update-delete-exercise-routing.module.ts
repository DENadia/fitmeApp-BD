import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDeleteExercisePage } from './update-delete-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDeleteExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDeleteExercisePageRoutingModule {}
