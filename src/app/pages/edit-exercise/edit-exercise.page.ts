import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Exercise } from 'src/app/models/exercise';
import { MusclesCategory } from 'src/app/models/muscles-category';
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
  categories: MusclesCategory[];
  constructor(private dataService: DatafirebaseService,  private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController, private auth: Auth) { 
    }

  ngOnInit() {
    if(this.id)
    {
      this.dataService.getUserMusclesGroups(this.id).subscribe((res)=>{
        this.categories=res;
        this.categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
        });
    }
  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  async addExercise()
  {
   
    this.dataService.addUserExercise(this.id,{exerciseName:this.exerciseName, category:this.category});
    const toast=await this.toastCtrl.create({
      message:'Category updated!',
      duration:1000
    });
    toast.present();
    this.dismiss();
  }
}
