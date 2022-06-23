import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStrechingExercisesPage } from './add-streching-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: AddStrechingExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStrechingExercisesPageRoutingModule {}
