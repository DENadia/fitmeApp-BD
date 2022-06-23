import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutdoorsActivitiesPage } from './outdoors-activities.page';

const routes: Routes = [
  {
    path: '',
    component: OutdoorsActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutdoorsActivitiesPageRoutingModule {}
