import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusclesGroupForRoutinePageRoutingModule } from './muscles-group-for-routine-routing.module';

import { MusclesGroupForRoutinePage } from './muscles-group-for-routine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusclesGroupForRoutinePageRoutingModule
  ],
  declarations: [MusclesGroupForRoutinePage]
})
export class MusclesGroupForRoutinePageModule {}
