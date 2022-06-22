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
      });
    }
    
  }

 ngOnInit(){
    }
    async editProfile()
    {
      if(this.user){
        const modal=await this.modalCtrl.create({
          component: ProfileEditComponent,
          componentProps: {user: this.user},
          breakpoints:[0,0.5,0.8],
          initialBreakpoint:0.5,
        });
        modal.present();
      }
    }
}
