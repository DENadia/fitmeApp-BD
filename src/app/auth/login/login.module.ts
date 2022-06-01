import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'', component: LoginComponent
      }
    ])
  ],
  exports: [RouterModule],
})
export class LoginModule { }
