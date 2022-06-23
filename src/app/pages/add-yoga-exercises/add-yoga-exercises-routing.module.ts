import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddYogaExercisesPage } from './add-yoga-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: AddYogaExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddYogaExercisesPageRoutingModule {}
