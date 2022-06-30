import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { timer } from 'rxjs';
import {Router} from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { CreateRoutinePage } from '../create-routine/create-routine.page';
import { EditRoutinePage } from '../edit-routine/edit-routine.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
 public today;
 routines=[];
 constructor(private dataFirebase: DatafirebaseService,
  private router: Router,
  private alertCtrl: AlertController,
  private modalCtrl: ModalController,
  private auth: Auth,
 private afs: Firestore) {
  this.dataFirebase.getUserRoutine(this.auth.currentUser.uid).subscribe(e=>{
    this.routines=e;
    console.log(this.routines);
  })
 }
 
  ngOnInit() {
      this.today = Date.now();
  }
  async addRoutine(){
      const modal=await this.modalCtrl.create({
        component: CreateRoutinePage,
      });
      modal.present();
  }
  async goToEdit(routineEdit){
    const modal=await this.modalCtrl.create({
      component: EditRoutinePage,
      componentProps: {idUser: this.auth.currentUser.uid, routine: routineEdit}
    });
   await modal.present();
  }
 
}
