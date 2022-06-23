import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewActivitiesOutdoorsTypesPage } from './view-activities-outdoors-types.page';

const routes: Routes = [
  {
    path: '',
    component: ViewActivitiesOutdoorsTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewActivitiesOutdoorsTypesPageRoutingModule {}
