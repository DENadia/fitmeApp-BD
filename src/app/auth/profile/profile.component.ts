import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, ModalController, ModalOptions } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile=null;
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
    private modalCtrl: ModalController,
    private avatar: AvatarService,
    private loadingCtrl:LoadingController,
    private alertCtrl: AlertController
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
    this.avatar.getUserProfile().subscribe(data=>{
      this.profile=data;
    });
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
    async changeImage(){
      const image=await Camera.getPhoto({
        quality: 90,
        allowEditing:false,
        resultType:CameraResultType.Base64,
        source:CameraSource.Photos,
      });
      console.log(image);
      if(image){
        const loading=await this.loadingCtrl.create();
        await loading.present();

        const result= await this.avatar.uploadImage(image);
        loading.dismiss();
        console.log(result.message);
        if(!result){
          console.log(result.message);
          const alert=await this.alertCtrl.create({
            header:'Upload failed',
            message:'There was a problem uploading your avatar.',
            buttons: ['OK'],
          });
          await alert.present();
        }
      }
    }
}
