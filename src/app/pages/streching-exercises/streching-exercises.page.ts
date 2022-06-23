import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { AddStrechingExercisesPage } from '../add-streching-exercises/add-streching-exercises.page';
import { UpdateDeleteStrechingExercisesPage } from '../update-delete-streching-exercises/update-delete-streching-exercises.page';

@Component({
  selector: 'app-streching-exercises',
  templateUrl: './streching-exercises.page.html',
  styleUrls: ['./streching-exercises.page.scss'],
})
export class StrechingExercisesPage implements OnInit {

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
      this.dataFirebase.getUserStrechingExercises(this.user.uid).subscribe((res)=>{
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
        component: AddStrechingExercisesPage,
        componentProps: {id: this.user.uid}
      });
      modal.present();
    }
  }
  async openExercise(exercise)
  {
    console.log(exercise.exerciseId);
    const modal=await this.modalCtrl.create({
      component: UpdateDeleteStrechingExercisesPage,
      componentProps: {idUser: this.user.uid, idExercise: exercise.exerciseId},
    });
    return await modal.present();
  }

}
