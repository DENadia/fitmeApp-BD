import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { timer } from 'rxjs';
import {Router} from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
 public today;
 constructor(private dataFirebase: DatafirebaseService,
  private router: Router,
  private alertCtrl: AlertController,
  private modalCtrl: ModalController,
  private auth: Auth,
 private afs: Firestore) {
 }
 
  ngOnInit() {
      this.today = Date.now();
  }
  addRoutine(){
  }
 
}
