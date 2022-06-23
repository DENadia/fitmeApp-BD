import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { UpdateDeleteYogaExercisesPage } from '../update-delete-yoga-exercises/update-delete-yoga-exercises.page';

@Component({
  selector: 'app-view-exercises-yoga-styles',
  templateUrl: './view-exercises-yoga-styles.page.html',
  styleUrls: ['./view-exercises-yoga-styles.page.scss'],
})
export class ViewExercisesYogaStylesPage implements OnInit {

  @Input() id: string;
  @Input() sName: string;
  exercises=null;
  constructor(private dataService: DatafirebaseService, private modalCtrl: ModalController) {
   }

  ngOnInit() {
   this.dataService.getUserYogaExerciseByStyle(this.id, this.sName).then(res=>{
    this.exercises=res;
   });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  async editExerciseCategory(exercise)
  {
    console.log(exercise);
    const modal=await this.modalCtrl.create({
      component: UpdateDeleteYogaExercisesPage,
      componentProps: {idUser: this.id, idExercise: exercise.exerciseId},
    });
    return await modal.present();
  }
}
