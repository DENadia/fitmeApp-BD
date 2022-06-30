import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { SubjectInServiceService } from 'src/app/services/subject-in-service.service';
import { EditExercisePage } from '../edit-exercise/edit-exercise.page';
import { ModalPage } from '../modal/modal.page';
import { UpdateDeleteExercisePage } from '../update-delete-exercise/update-delete-exercise.page';

@Component({
  selector: 'app-workout-exercises',
  templateUrl: './workout-exercises.component.html',
  styleUrls: ['./workout-exercises.component.scss'],
})
export class WorkoutExercisesComponent implements OnInit {
  exercises=null;
  user: any;
  constructor(private dataFirebase: DatafirebaseService,
    private router: Router,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private auth: Auth,
   private afs: Firestore) {
    this.user = auth.currentUser;
    if(this.user)
    {
      this.dataFirebase.getUserExercises(this.user.uid).subscribe((res)=>{
        console.log(res);
        this.exercises=res;
        this.exercises.sort((a, b) => a.exerciseName.localeCompare(b.exerciseName));
        });
    }
   }
  ngOnInit() {
  }
  public goToDetails(name): void{
    this.router.navigateByUrl(`/${name}`);
  }
  async addExercise()
  {
    if(this.user){
      const modal=await this.modalCtrl.create({
        component: EditExercisePage,
        componentProps: {id: this.user.uid}
      });
      modal.present();
    }
  }
  async openExercise(exercise)
  {
    console.log(exercise.exerciseId);
    const modal=await this.modalCtrl.create({
      component: UpdateDeleteExercisePage,
      componentProps: {idUser: this.user.uid, idExercise: exercise.exerciseId},
    });
    return await modal.present();
  }
 
}
