import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOutdoorsActivityPageRoutingModule } from './add-outdoors-activity-routing.module';

import { AddOutdoorsActivityPage } from './add-outdoors-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOutdoorsActivityPageRoutingModule
  ],
  declarations: [AddOutdoorsActivityPage]
})
export class AddOutdoorsActivityPageModule {}
