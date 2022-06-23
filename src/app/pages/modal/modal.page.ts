import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Exercise } from 'src/app/models/exercise';
import { MusclesCategory } from 'src/app/models/muscles-category';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input()  category: MusclesCategory;

  exercises: Exercise[]=null;
;  constructor(private dataService: DatafirebaseService,  private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController, private auth: Auth) { }

  ngOnInit() {
    if(this.auth.currentUser)
    {
      this.dataService.getUserMusclesGroupById(this.auth.currentUser.uid, this.category.categoryId).subscribe(res =>{
        this.category=res;
      });
      this.dataService.getUserExerciseByCategory(this.auth.currentUser.uid, this.category.categoryName).then(res=>{
        
        this.exercises=res;
        console.log(this.exercises);
      });
    }
  }
  async updateCategory()
  {
    if(this.auth.currentUser)
    {
      this.exercises.forEach(exercise=>{
        exercise.category=this.category.categoryName;
        this.dataService.updateUserExercise(this.auth.currentUser.uid, exercise);
      });
    this.dataService.updateUserMuscle( this.auth.currentUser.uid,this.category);
    const toast=await this.toastCtrl.create({
      message:'Category updated!',
      duration:1000
    });
    toast.present();
  }
  this.modalCtrl.dismiss();
  }
  async deleteCategory()
  {
    if(this.auth.currentUser)
    {
      if(this.exercises.length!==0){
        // eslint-disable-next-line max-len
        this.showAlert('Error', 'There are exercises connected to this category. Change category for these exercises before deleting this category. Thank you!');
      }
      else{
        await this.dataService.deleteUserMuscle( this.auth.currentUser.uid,this.category);
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
