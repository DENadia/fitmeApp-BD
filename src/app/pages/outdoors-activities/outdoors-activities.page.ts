import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { AddOutdoorsActivityPage } from '../add-outdoors-activity/add-outdoors-activity.page';
import { UpdateDeleteOutdoorsActivityPage } from '../update-delete-outdoors-activity/update-delete-outdoors-activity.page';

@Component({
  selector: 'app-outdoors-activities',
  templateUrl: './outdoors-activities.page.html',
  styleUrls: ['./outdoors-activities.page.scss'],
})
export class OutdoorsActivitiesPage implements OnInit {

  activities=null;
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
      this.dataFirebase.getUserOutdoorsActivities(this.user.uid).subscribe((res)=>{
        this.activities=res;
        this.activities.sort((a, b) => a.name.localeCompare(b.name));
        });
    }
   }
  ngOnInit() {}
  public goToDetails(name): void{
    this.router.navigateByUrl(`/${name}`);
  }
  async addActivity()
  {
    if(this.user){
      const modal=await this.modalCtrl.create({
        component: AddOutdoorsActivityPage,
        componentProps: {id: this.user.uid}
      });
      modal.present();
    }
  }
  async openActivity(activity)
  {
        const modal=await this.modalCtrl.create({
      component: UpdateDeleteOutdoorsActivityPage,
      componentProps: {idUser: this.user.uid, idActivity: activity.activityId},
    });
    return await modal.present();
  }
}
