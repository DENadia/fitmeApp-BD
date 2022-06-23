import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOutdoorsActivityPage } from './add-outdoors-activity.page';

const routes: Routes = [
  {
    path: '',
    component: AddOutdoorsActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOutdoorsActivityPageRoutingModule {}
