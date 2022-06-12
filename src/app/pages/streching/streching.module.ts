import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { StrechingComponent } from './streching.component';

@NgModule({
  declarations: [StrechingComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
     path: '', component:StrechingComponent
    }])
  ]
})
export class StrechingModule { }
