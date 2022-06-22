import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutineVisualizerPage } from './routine-visualizer.page';

const routes: Routes = [
  {
    path: '',
    component: RoutineVisualizerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineVisualizerPageRoutingModule {}
