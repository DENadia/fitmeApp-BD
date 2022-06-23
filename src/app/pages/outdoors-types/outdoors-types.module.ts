import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutdoorsTypesPageRoutingModule } from './outdoors-types-routing.module';

import { OutdoorsTypesPage } from './outdoors-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutdoorsTypesPageRoutingModule
  ],
  declarations: [OutdoorsTypesPage]
})
export class OutdoorsTypesPageModule {}
