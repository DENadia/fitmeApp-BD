import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProfileEditComponent } from './profile-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfileEditComponent],
  imports: [
    FormsModule,
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
