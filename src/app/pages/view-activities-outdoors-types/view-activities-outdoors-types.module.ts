import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewActivitiesOutdoorsTypesPageRoutingModule } from './view-activities-outdoors-types-routing.module';

import { ViewActivitiesOutdoorsTypesPage } from './view-activities-outdoors-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewActivitiesOutdoorsTypesPageRoutingModule
  ],
  declarations: [ViewActivitiesOutdoorsTypesPage]
})
export class ViewActivitiesOutdoorsTypesPageModule {}
