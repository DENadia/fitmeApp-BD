import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YogaStylesPage } from './yoga-styles.page';

const routes: Routes = [
  {
    path: '',
    component: YogaStylesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YogaStylesPageRoutingModule {}
