import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutdoorsActivitiesPageRoutingModule } from './outdoors-activities-routing.module';

import { OutdoorsActivitiesPage } from './outdoors-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutdoorsActivitiesPageRoutingModule
  ],
  declarations: [OutdoorsActivitiesPage]
})
export class OutdoorsActivitiesPageModule {}
