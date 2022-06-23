import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewExercisesStrechingTargetPageRoutingModule } from './view-exercises-streching-target-routing.module';

import { ViewExercisesStrechingTargetPage } from './view-exercises-streching-target.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewExercisesStrechingTargetPageRoutingModule
  ],
  declarations: [ViewExercisesStrechingTargetPage]
})
export class ViewExercisesStrechingTargetPageModule {}
