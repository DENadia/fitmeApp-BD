import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalStylePageRoutingModule } from './modal-style-routing.module';

import { ModalStylePage } from './modal-style.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalStylePageRoutingModule
  ],
  declarations: [ModalStylePage]
})
export class ModalStylePageModule {}
