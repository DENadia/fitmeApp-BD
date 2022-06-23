import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-modal-streching-target',
  templateUrl: './modal-streching-target.page.html',
  styleUrls: ['./modal-streching-target.page.scss'],
})
export class ModalStrechingTargetPage implements OnInit {

  @Input()  target: any;
  exercises: any[]=[];
    constructor(private dataService: DatafirebaseService,  private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController, private auth: Auth) { }

  ngOnInit() {
    if(this.auth.currentUser)
    {
      this.dataService.getUserStrechingTargetById(this.auth.currentUser.uid, this.target.categoryId).subscribe(res =>{
        this.target=res;
      });
      this.dataService.getUserStrechingExerciseByTarget(this.auth.currentUser.uid, this.target.name).then(res=>{
        this.exercises=res;
      });
    }
  }
  async updateTarget()
  {
    if(this.auth.currentUser)
    {
      this.exercises.forEach(exercise=>{
        exercise.target=this.target.name;
        this.dataService.updateUserStrechingExercise(this.auth.currentUser.uid, exercise);
      });
    this.dataService.updateUserStrechingTarget( this.auth.currentUser.uid,this.target);
    const toast=await this.toastCtrl.create({
      message:'Target updated!',
      duration:1000
    });
    toast.present();
  }
  this.modalCtrl.dismiss();
  }
  async deleteTarget()
  {
    if(this.auth.currentUser)
    {
      if(this.exercises.length!==0){
        // eslint-disable-next-line max-len
        this.showAlert('Error', 'There are exercises connected to this target. Change target for these exercises before deleting this target. Thank you!');
      }
      else{
        await this.dataService.deleteUserStrechingTarget( this.auth.currentUser.uid,this.target);
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
