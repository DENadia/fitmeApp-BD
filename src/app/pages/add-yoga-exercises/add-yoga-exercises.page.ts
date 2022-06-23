import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-add-yoga-exercises',
  templateUrl: './add-yoga-exercises.page.html',
  styleUrls: ['./add-yoga-exercises.page.scss'],
})
export class AddYogaExercisesPage implements OnInit {
  @Input() id: string;
  exerciseName='';
  style='';
  description='';
  styles: any[];
  constructor(private dataService: DatafirebaseService,  private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController, private auth: Auth) { 
    }

  ngOnInit() {
    if(this.id)
    {
      this.dataService.getUserYogaStyles(this.id).subscribe((res)=>{
        this.styles=res;
        this.styles.sort((a, b) => a.name.localeCompare(b.name));
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
    this.dataService.addUserYogaExercise(this.id,{name:this.exerciseName, style:this.style, description: this.description});
    const toast=await this.toastCtrl.create({
      message:'Exercise added!',
      duration:1000
    });
    toast.present();
    this.dismiss();
  }

}
