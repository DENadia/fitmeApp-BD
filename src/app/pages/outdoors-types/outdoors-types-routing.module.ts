import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutdoorsTypesPage } from './outdoors-types.page';

const routes: Routes = [
  {
    path: '',
    component: OutdoorsTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutdoorsTypesPageRoutingModule {}
