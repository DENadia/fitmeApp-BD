import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-update-delete-yoga-exercises',
  templateUrl: './update-delete-yoga-exercises.page.html',
  styleUrls: ['./update-delete-yoga-exercises.page.scss'],
})
export class UpdateDeleteYogaExercisesPage implements OnInit {

  @Input() idUser;
  @Input() idExercise;
  exercise: any=null;
  styles: any[]=[];
  constructor(private dataService: DatafirebaseService, private modalCtrl: ModalController, 
    private toastCtrl: ToastController, private alertCtrl: AlertController) { 

  }

  ngOnInit() {
    if(this.idUser)
    {
      this.dataService.getUserYogaStyles(this.idUser).subscribe((res)=>{
        this.styles=res;
        this.styles.sort((a, b) => a.name.localeCompare(b.name));
        });
      this.dataService.getUserYogaExerciseById(this.idUser, this.idExercise).subscribe(res =>{
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
    this.dataService.updateUserYogaExercise(this.idUser, this.exercise);
    this.dismiss();
  }
  deleteExercise(){
    this.dataService.deleteUserYogaExercise(this.idUser,this.idExercise);
    this.dismiss();
  }
}
