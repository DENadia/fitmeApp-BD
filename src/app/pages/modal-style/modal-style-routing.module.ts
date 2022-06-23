import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalStylePage } from './modal-style.page';

const routes: Routes = [
  {
    path: '',
    component: ModalStylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalStylePageRoutingModule {}
