import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDeleteStrechingExercisesPage } from './update-delete-streching-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDeleteStrechingExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDeleteStrechingExercisesPageRoutingModule {}
