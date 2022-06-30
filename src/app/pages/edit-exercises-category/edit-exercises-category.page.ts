import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Exercise } from 'src/app/models/exercise';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { SubjectInServiceService } from 'src/app/services/subject-in-service.service';
import { EditExercisePage } from '../edit-exercise/edit-exercise.page';
import { UpdateDeleteExercisePage } from '../update-delete-exercise/update-delete-exercise.page';

@Component({
  selector: 'app-edit-exercises-category',
  templateUrl: './edit-exercises-category.page.html',
  styleUrls: ['./edit-exercises-category.page.scss'],
})
export class EditExercisesCategoryPage implements OnInit {
  @Input() id: string;
  @Input() cName: string;
  exercises=null;
  constructor(private dataService: DatafirebaseService, private modalCtrl: ModalController, private subjectInService: SubjectInServiceService, private router: Router, private _location: Location) {
   }

  ngOnInit() {
   this.dataService.getUserExerciseByCategory(this.id, this.cName).then(res=>{
    this.exercises=res;
   });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
    });
  }
  async editExerciseCategory(exercise)
  {
    console.log(exercise);
    const modal=await this.modalCtrl.create({
      component: UpdateDeleteExercisePage,
      componentProps: {idUser: this.id, idExercise: exercise.exerciseId},
    });
    return await modal.present();
  }
  sendData(exercise){
    console.log(exercise.exerciseName);
    this.subjectInService.updateDate(exercise.exerciseName);
   this.subjectInService.currentData.subscribe((e)=>{
    console.log(e);
    });
    this.dismiss();
  }
}
