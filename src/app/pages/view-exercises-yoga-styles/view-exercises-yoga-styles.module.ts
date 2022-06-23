import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewExercisesYogaStylesPageRoutingModule } from './view-exercises-yoga-styles-routing.module';

import { ViewExercisesYogaStylesPage } from './view-exercises-yoga-styles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewExercisesYogaStylesPageRoutingModule
  ],
  declarations: [ViewExercisesYogaStylesPage]
})
export class ViewExercisesYogaStylesPageModule {}
