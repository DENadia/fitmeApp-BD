import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusclesGroupForRoutinePage } from './muscles-group-for-routine.page';

const routes: Routes = [
  {
    path: '',
    component: MusclesGroupForRoutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusclesGroupForRoutinePageRoutingModule {}
