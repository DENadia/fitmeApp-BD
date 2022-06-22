import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { EditorListComponent } from './editor-list.component';

@NgModule({
  declarations: [EditorListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
     path: '', component:EditorListComponent
    }])
  ]
})
export class EditorListModule { }
