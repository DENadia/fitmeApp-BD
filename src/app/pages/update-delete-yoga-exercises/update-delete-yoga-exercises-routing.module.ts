import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDeleteYogaExercisesPage } from './update-delete-yoga-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDeleteYogaExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDeleteYogaExercisesPageRoutingModule {}
