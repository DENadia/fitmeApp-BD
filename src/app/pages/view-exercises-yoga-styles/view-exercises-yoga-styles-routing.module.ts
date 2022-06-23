import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewExercisesYogaStylesPage } from './view-exercises-yoga-styles.page';

const routes: Routes = [
  {
    path: '',
    component: ViewExercisesYogaStylesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewExercisesYogaStylesPageRoutingModule {}
