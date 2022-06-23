import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YogaStylesPageRoutingModule } from './yoga-styles-routing.module';

import { YogaStylesPage } from './yoga-styles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YogaStylesPageRoutingModule
  ],
  declarations: [YogaStylesPage]
})
export class YogaStylesPageModule {}
