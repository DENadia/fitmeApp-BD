import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path:'', component:HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
