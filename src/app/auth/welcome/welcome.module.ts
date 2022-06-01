import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
     path: '', component:WelcomeComponent
    }])
  ]
})
export class WelcomeModule { }
