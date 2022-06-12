import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { YogaComponent } from './yoga.component';

@NgModule({
  declarations: [YogaComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
     path: '', component:YogaComponent
    }])
  ]
})
export class YogaModule { }
