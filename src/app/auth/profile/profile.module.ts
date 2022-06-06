import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path:'', component:ProfileComponent
      }
    ])
  ],
  exports: [RouterModule],
})
export class ProfileModule { }
