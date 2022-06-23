import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalOutdoorsTypePageRoutingModule } from './modal-outdoors-type-routing.module';

import { ModalOutdoorsTypePage } from './modal-outdoors-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalOutdoorsTypePageRoutingModule
  ],
  declarations: [ModalOutdoorsTypePage]
})
export class ModalOutdoorsTypePageModule {}
