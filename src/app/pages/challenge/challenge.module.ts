import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ChallengeComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(
      [
        {path:'', component:ChallengeComponent}
      ] )
    ]

})
export class ChallengeModule { }
