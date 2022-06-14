import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Exercise } from 'src/app/models/exercise';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.page.html',
  styleUrls: ['./edit-exercise.page.scss'],
})
export class EditExercisePage implements OnInit {
  @Input() id: string;
  exerciseName='';
  category='';
  constructor(private dataService: DatafirebaseService,  private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController, private auth: Auth) { }

  ngOnInit() {

  }
  async addExercise()
  {

    this.dataService.addUserExercise(this.id,{exerciseName:this.exerciseName, category:this.category});
    const toast=await this.toastCtrl.create({
      message:'Category updated!',
      duration:1000
    });
    toast.present();
  }
  
}
