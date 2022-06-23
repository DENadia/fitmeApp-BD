import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-update-delete-streching-exercises',
  templateUrl: './update-delete-streching-exercises.page.html',
  styleUrls: ['./update-delete-streching-exercises.page.scss'],
})
export class UpdateDeleteStrechingExercisesPage implements OnInit {

  @Input() idUser;
  @Input() idExercise;
  exercise: any=null;
  targets: any[]=[];
  constructor(private dataService: DatafirebaseService, private modalCtrl: ModalController, 
    private toastCtrl: ToastController, private alertCtrl: AlertController) { 

  }

  ngOnInit() {
    if(this.idUser)
    {
      this.dataService.getUserStrechingTargets(this.idUser).subscribe((res)=>{
        this.targets=res;
        this.targets.sort((a, b) => a.name.localeCompare(b.name));
        });
      this.dataService.getUserStrechingExerciseById(this.idUser, this.idExercise).subscribe(res =>{
        this.exercise=res;
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
    this.dataService.updateUserStrechingExercise(this.idUser, this.exercise);
    this.dismiss();
  }
  deleteExercise(){
    this.dataService.deleteUserStrechingExercise(this.idUser,this.idExercise);
    this.dismiss();
  }
}
