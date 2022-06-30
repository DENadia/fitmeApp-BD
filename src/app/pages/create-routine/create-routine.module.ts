import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CreateRoutinePageRoutingModule } from './create-routine-routing.module';

import { CreateRoutinePage } from './create-routine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateRoutinePageRoutingModule
  ],
  declarations: [CreateRoutinePage]
})
export class CreateRoutinePageModule {}
