import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path:'', component:SignupComponent
      }
    ])
  ]
})
export class SignupModule { }
