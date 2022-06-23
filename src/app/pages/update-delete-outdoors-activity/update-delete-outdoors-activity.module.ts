import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDeleteOutdoorsActivityPageRoutingModule } from './update-delete-outdoors-activity-routing.module';

import { UpdateDeleteOutdoorsActivityPage } from './update-delete-outdoors-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDeleteOutdoorsActivityPageRoutingModule
  ],
  declarations: [UpdateDeleteOutdoorsActivityPage]
})
export class UpdateDeleteOutdoorsActivityPageModule {}
