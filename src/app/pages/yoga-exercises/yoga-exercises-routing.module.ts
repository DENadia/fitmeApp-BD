import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YogaExercisesPage } from './yoga-exercises.page';

const routes: Routes = [
  {
    path: '',
    component: YogaExercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YogaExercisesPageRoutingModule {}
