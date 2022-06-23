import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDeleteOutdoorsActivityPage } from './update-delete-outdoors-activity.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDeleteOutdoorsActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDeleteOutdoorsActivityPageRoutingModule {}
