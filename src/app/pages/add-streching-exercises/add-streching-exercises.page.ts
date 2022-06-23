import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-add-streching-exercises',
  templateUrl: './add-streching-exercises.page.html',
  styleUrls: ['./add-streching-exercises.page.scss'],
})
export class AddStrechingExercisesPage implements OnInit {

  @Input() id: string;
  exerciseName='';
  target='';
  description='';
  targets: any[];
  constructor(private dataService: DatafirebaseService,  private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController, private auth: Auth) { 
    }

  ngOnInit() {
    if(this.id)
    {
      this.dataService.getUserStrechingTargets(this.id).subscribe((res)=>{
        this.targets=res;
        this.targets.sort((a, b) => a.name.localeCompare(b.name));
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
    this.dataService.addUserStrechingExercise(this.id,{name:this.exerciseName, target:this.target, description: this.description});
    const toast=await this.toastCtrl.create({
      message:'Exercise added!',
      duration:1000
    });
    toast.present();
    this.dismiss();
  }

}
