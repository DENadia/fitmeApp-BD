import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrechingTargetsPageRoutingModule } from './streching-targets-routing.module';

import { StrechingTargetsPage } from './streching-targets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrechingTargetsPageRoutingModule
  ],
  declarations: [StrechingTargetsPage]
})
export class StrechingTargetsPageModule {}
