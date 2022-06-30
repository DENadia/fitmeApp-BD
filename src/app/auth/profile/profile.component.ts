import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { AlertController, ModalController, ModalOptions } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user=null;
  userId=null;
  email="";
  userName="";
  fat: number;
  calories: number;
  protein: number;
  carbs: number;
  existing=0;
  constructor(
    private firestore: Firestore, 
    private ath: Auth,
    private alertController: AlertController,
    private dataService: DatafirebaseService,
    private afth: AuthService,
    private modalCtrl: ModalController
  ) {
    this.userId=this.ath.currentUser.uid;
    if(this.userId)
    {
      this.afth.getUserById(this.userId).subscribe(res=>{
        console.log(res);
        this.user=res;
        console.log(this.user.userEmail);
        this.email=this.user.userEmail;
        this.userName=this.user.userName;
      });
    }
    
  }

 ngOnInit(){
  this.dataService.getUserCaloriesData(this.userId).subscribe(res=>{
    console.log(res);
    if(res)
    {
      this.existing=1;
      this.fat=res.fat;
      this.protein=res.protein;
      this.calories=res.calories;
      this.carbs=res.carb;
    }
  });
    }
    async openSurvey()
    {
      if(this.user){
        const modal=await this.modalCtrl.create({
          component: ProfileEditComponent,
          componentProps: {user: this.user},
          breakpoints:[0,0.5,0.8],
          initialBreakpoint:0.8,
        });
        modal.present();
      }
    }
}
