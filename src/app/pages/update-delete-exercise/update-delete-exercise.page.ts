import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Exercise } from 'src/app/models/exercise';
import { MusclesCategory } from 'src/app/models/muscles-category';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-update-delete-exercise',
  templateUrl: './update-delete-exercise.page.html',
  styleUrls: ['./update-delete-exercise.page.scss'],
})
export class UpdateDeleteExercisePage implements OnInit {
  @Input() idUser;
  @Input() idExercise;
  exercise: Exercise=null;
  categories: MusclesCategory[]=[];
  constructor(private dataService: DatafirebaseService, private modalCtrl: ModalController, 
    private toastCtrl: ToastController, private alertCtrl: AlertController) { 

  }

  ngOnInit() {
    if(this.idUser)
    {
      this.dataService.getUserMusclesGroups(this.idUser).subscribe((res)=>{
        this.categories=res;
        this.categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
        });
      this.dataService.getUserExerciseById(this.idUser, this.idExercise).subscribe(res =>{
        this.exercise=res;
        console.log(this.exercise);
      });
    }
  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  updateExercise()
  {
    this.dataService.updateUserExercise(this.idUser, this.exercise);
    this.dismiss();
  }
  deleteExercise(){
    this.dataService.deleteUserExercise(this.idUser,this.idExercise);
    this.dismiss();
  }
}
