import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalStrechingTargetPageRoutingModule } from './modal-streching-target-routing.module';

import { ModalStrechingTargetPage } from './modal-streching-target.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalStrechingTargetPageRoutingModule
  ],
  declarations: [ModalStrechingTargetPage]
})
export class ModalStrechingTargetPageModule {}
