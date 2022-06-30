import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRoutinePageRoutingModule } from './edit-routine-routing.module';

import { EditRoutinePage } from './edit-routine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditRoutinePageRoutingModule
  ],
  declarations: [EditRoutinePage]
})
export class EditRoutinePageModule {}
