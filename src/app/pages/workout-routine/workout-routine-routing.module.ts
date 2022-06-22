import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutRoutinePage } from './workout-routine.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutRoutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutRoutinePageRoutingModule {}
