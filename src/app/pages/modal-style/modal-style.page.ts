import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-modal-style',
  templateUrl: './modal-style.page.html',
  styleUrls: ['./modal-style.page.scss'],
})
export class ModalStylePage implements OnInit {
  @Input()  style: any;
  exercises: any[]=[];
    constructor(private dataService: DatafirebaseService,  private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController, private auth: Auth) { }

  ngOnInit() {
    if(this.auth.currentUser)
    {
      this.dataService.getUserYogaStyleById(this.auth.currentUser.uid, this.style.categoryId).subscribe(res =>{
        this.style=res;
      });
      this.dataService.getUserYogaExerciseByStyle(this.auth.currentUser.uid, this.style.name).then(res=>{
        this.exercises=res;
      });
    }
  }
  async updateStyle()
  {
    if(this.auth.currentUser)
    {
      this.exercises.forEach(exercise=>{
        exercise.style=this.style.name;
        this.dataService.updateUserYogaExercise(this.auth.currentUser.uid, exercise);
      });
    this.dataService.updateUserYogaStyle( this.auth.currentUser.uid,this.style);
    const toast=await this.toastCtrl.create({
      message:'Style updated!',
      duration:1000
    });
    toast.present();
  }
  this.modalCtrl.dismiss();
  }
  async deleteStyle()
  {
    if(this.auth.currentUser)
    {
      if(this.exercises.length!==0){
        // eslint-disable-next-line max-len
        this.showAlert('Error', 'There are exercises connected to this style. Change style for these exercises before deleting this style. Thank you!');
      }
      else{
        await this.dataService.deleteUserYogaStyle( this.auth.currentUser.uid,this.style);
        this.modalCtrl.dismiss();
      }
     
    }
    }
    async showAlert(header, message) {
      const alert = await this.alertCtrl.create({
        header,
        message,
        buttons: ['OK'],
      });
      await alert.present();
    }
}
