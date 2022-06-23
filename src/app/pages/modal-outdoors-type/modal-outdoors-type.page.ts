import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-modal-outdoors-type',
  templateUrl: './modal-outdoors-type.page.html',
  styleUrls: ['./modal-outdoors-type.page.scss'],
})
export class ModalOutdoorsTypePage implements OnInit {

  @Input()  type: any;
  exercises: any[]=[];
    constructor(private dataService: DatafirebaseService,  private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController, private auth: Auth) { }

  ngOnInit() {
    if(this.auth.currentUser)
    {
      this.dataService.getUserOutdoorsTypesById(this.auth.currentUser.uid, this.type.typeId).subscribe(res =>{
        this.type=res;
      });
      this.dataService.getUserOutdoorsActivityByType(this.auth.currentUser.uid, this.type.name).then(res=>{
        this.exercises=res;
      });
    }
  }
  async updateType()
  {
    if(this.auth.currentUser)
    {
      this.exercises.forEach(exercise=>{
        exercise.type=this.type.name;
        this.dataService.updateUserOutdoorsActivity(this.auth.currentUser.uid, exercise);
      });
    this.dataService.updateUserOutdoorsTypes( this.auth.currentUser.uid,this.type);
    const toast=await this.toastCtrl.create({
      message:'Type updated!',
      duration:1000
    });
    toast.present();
  }
  this.modalCtrl.dismiss();
  }
  async deleteType()
  {
    if(this.auth.currentUser)
    {
      if(this.exercises.length!==0){
        // eslint-disable-next-line max-len
        this.showAlert('Error', 'There are activities connected to this type. Change type for these exercises before deleting this type. Thank you!');
      }
      else{
        await this.dataService.deleteUserOutdoorsTypes( this.auth.currentUser.uid,this.type);
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
