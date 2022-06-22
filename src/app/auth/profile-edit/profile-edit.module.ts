import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProfileEditComponent } from './profile-edit.component';



@NgModule({
  declarations: [ProfileEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path:'', component:ProfileEditComponent
      }
    ])
  ]
})
export class ProfileEditModule { }
