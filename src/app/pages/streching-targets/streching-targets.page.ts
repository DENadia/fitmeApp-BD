import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { ModalStrechingTargetPage } from '../modal-streching-target/modal-streching-target.page';
import { ViewExercisesStrechingTargetPage } from '../view-exercises-streching-target/view-exercises-streching-target.page';

@Component({
  selector: 'app-streching-targets',
  templateUrl: './streching-targets.page.html',
  styleUrls: ['./streching-targets.page.scss'],
})
export class StrechingTargetsPage implements OnInit {

  targets=null;
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
        this.dataFirebase.getUserStrechingTargets(this.user.uid).subscribe((res)=>{
          this.targets=res;
          this.targets.sort((a, b) => a.name.localeCompare(b.name));
          });
      }
    }

    public goToDetails(name): void{
      this.router.navigateByUrl(`/${name}`);
    }
    async addTarget()
    {
      if(this.user){
        const alert=await this.alertCtrl.create({
          header: 'Add Target',
          cssClass: 'alert-btn',
          inputs:[
            {
              name:'name',
              placeholder:'add new target',
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
                if(this.targets.findIndex((target)=>{
                return target.name===res.name
              })!==-1){
                  this.showAlert('Error', 'Target already existing! Please add a new one');
                }
                else{
                  this.dataFirebase.addUserStrechingTargets(this.user.uid,{name: res.name});
                }
              }
            }
          ]
        });
        await alert.present();
      }
    }
    async openTarget(target)
    {
      const modal=await this.modalCtrl.create({
        component: ModalStrechingTargetPage,
        componentProps: {target: target},
        breakpoints:[0,0.5,0.8],
        initialBreakpoint:0.5,
      });
      modal.present();
    }
    async targetExercise(target){
      if(this.user){
        const modal=await this.modalCtrl.create({
          component:ViewExercisesStrechingTargetPage,
          componentProps: {
            targets: this.targets,
            id: this.user.uid, 
            tName: target.name
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
