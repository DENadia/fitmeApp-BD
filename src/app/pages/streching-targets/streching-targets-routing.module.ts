import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrechingTargetsPage } from './streching-targets.page';

const routes: Routes = [
  {
    path: '',
    component: StrechingTargetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrechingTargetsPageRoutingModule {}
