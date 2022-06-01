import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ForgotpasswordComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path:'', component:ForgotpasswordComponent
      }
    ])
  ]
})
export class ForgotpasswordModule { }
