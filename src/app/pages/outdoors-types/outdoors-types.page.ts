import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { ModalOutdoorsTypePage } from '../modal-outdoors-type/modal-outdoors-type.page';
import { ViewActivitiesOutdoorsTypesPage } from '../view-activities-outdoors-types/view-activities-outdoors-types.page';

@Component({
  selector: 'app-outdoors-types',
  templateUrl: './outdoors-types.page.html',
  styleUrls: ['./outdoors-types.page.scss'],
})
export class OutdoorsTypesPage implements OnInit {
  types=null;
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
      this.dataFirebase.getUserOutdoorsTypes(this.user.uid).subscribe((res)=>{
        this.types=res;
        this.types.sort((a, b) => a.name.localeCompare(b.name));
        console.log(this.types);
        });
    }
  }

  async addType()
  {
    if(this.user){
      const alert=await this.alertCtrl.create({
        header: 'Add Type',
        cssClass: 'alert-btn',
        inputs:[
          {
            name:'name',
            placeholder:'add new type',
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
              if(this.types.findIndex((type)=>{
              return type.name===res.name
            })!==-1){
                this.showAlert('Error', 'Outdoors type already existing! Please add a new one');
              }
              else{
                this.dataFirebase.addUserOutdoorsTypes(this.user.uid,{name: res.name});
              }
            }
          }
        ]
      });
      await alert.present();
    }
  }
  async openType(type)
  {
    const modal=await this.modalCtrl.create({
      component: ModalOutdoorsTypePage,
      componentProps: {type: type},
      breakpoints:[0,0.5,0.8],
      initialBreakpoint:0.5,
    });
    modal.present();
  }
  async typeActivities(type){
    if(this.user){
      const modal=await this.modalCtrl.create({
        component: ViewActivitiesOutdoorsTypesPage,
        componentProps: {
          types: this.types,
          id: this.user.uid, 
          tName: type.name
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
