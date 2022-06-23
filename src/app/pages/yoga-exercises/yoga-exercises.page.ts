import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { AddYogaExercisesPage } from '../add-yoga-exercises/add-yoga-exercises.page';
import { UpdateDeleteYogaExercisesPage } from '../update-delete-yoga-exercises/update-delete-yoga-exercises.page';

@Component({
  selector: 'app-yoga-exercises',
  templateUrl: './yoga-exercises.page.html',
  styleUrls: ['./yoga-exercises.page.scss'],
})
export class YogaExercisesPage implements OnInit {

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
      this.dataFirebase.getUserYogaExercises(this.user.uid).subscribe((res)=>{
        console.log(res);
        this.exercises=res;
        this.exercises.sort((a, b) => a.name.localeCompare(b.name));
        });
    }
   }
  ngOnInit() {}
  public goToDetails(name): void{
    this.router.navigateByUrl(`/${name}`);
  }
  async addExercise()
  {
    if(this.user){
      const modal=await this.modalCtrl.create({
        component: AddYogaExercisesPage,
        componentProps: {id: this.user.uid}
      });
      modal.present();
    }
  }
  async openExercise(exercise)
  {
    console.log(exercise.exerciseId);
    const modal=await this.modalCtrl.create({
      component: UpdateDeleteYogaExercisesPage,
      componentProps: {idUser: this.user.uid, idExercise: exercise.exerciseId},
    });
    return await modal.present();
  }
}
