import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutineVisualizerPageRoutingModule } from './routine-visualizer-routing.module';

import { RoutineVisualizerPage } from './routine-visualizer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutineVisualizerPageRoutingModule
  ],
  declarations: [RoutineVisualizerPage]
})
export class RoutineVisualizerPageModule {}
