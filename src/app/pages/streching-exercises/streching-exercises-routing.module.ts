import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrechingExercisesPage } from './streching-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: StrechingExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrechingExercisesPageRoutingModule {}
