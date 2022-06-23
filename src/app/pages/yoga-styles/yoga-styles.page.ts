import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { ModalStylePage } from '../modal-style/modal-style.page';
import { ViewExercisesYogaStylesPage } from '../view-exercises-yoga-styles/view-exercises-yoga-styles.page';

@Component({
  selector: 'app-yoga-styles',
  templateUrl: './yoga-styles.page.html',
  styleUrls: ['./yoga-styles.page.scss'],
})
export class YogaStylesPage implements OnInit {

  styles=null;
  user: any;
  constructor(private dataFirebase: DatafirebaseService,
    private router: Router,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private auth: Auth,
   private afs: Firestore) {
   }
  ngOnInit() {
    this.user = this.auth.currentUser;
    if(this.user)
    {
      this.dataFirebase.getUserYogaStyles(this.user.uid).subscribe((res)=>{
        this.styles=res;
        this.styles.sort((a, b) => a.name.localeCompare(b.name));
        console.log(this.styles);
        });
    }
  }

  async addStyle()
  {
    if(this.user){
      const alert=await this.alertCtrl.create({
        header: 'Add Style',
        cssClass: 'alert-btn',
        inputs:[
          {
            name:'name',
            placeholder:'add new style',
            type:'text'
          }
        ],
        buttons:[
          {
            text:'Cancel',
            role:'cancel',
          },
          {
            text:'Add',
            handler:(res)=>{
              console.log(res.name);
              if(this.styles.findIndex((style)=>{
              return style.name===res.name
            })!==-1){
                this.showAlert('Error', 'Yoga style already existing! Please add a new one');
              }
              else{
                this.dataFirebase.addUserYogaStyle(this.user.uid,{name: res.name});
              }
            }
          }
        ]
      });
      await alert.present();
    }
  }
  async openStyle(style)
  {
    console.log(style);
    const modal=await this.modalCtrl.create({
      component: ModalStylePage,
      componentProps: {style: style},
      breakpoints:[0,0.5,0.8],
      initialBreakpoint:0.5,
    });
    modal.present();
  }
  async styleExercise(style){
    if(this.user){
      const modal=await this.modalCtrl.create({
        component: ViewExercisesYogaStylesPage,
        componentProps: {
          categories: this.styles,
          id: this.user.uid, 
          sName: style.name
        },
      });
      modal.present();
    }
  }
  async showAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
