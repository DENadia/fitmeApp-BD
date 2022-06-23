import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalStrechingTargetPage } from './modal-streching-target.page';

const routes: Routes = [
  {
    path: '',
    component: ModalStrechingTargetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalStrechingTargetPageRoutingModule {}
