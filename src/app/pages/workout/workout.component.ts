import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
    categories=null;
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
        this.dataFirebase.getUserMusclesGroups(this.user.uid).subscribe((res)=>{
          console.log(res);
          this.categories=res;
          this.categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
          });
      }
     }
    ngOnInit() {}
    public goToDetails(name): void{
      this.router.navigateByUrl(`/${name}`);
    }
    async addCategory()
    {
      if(this.user){
        const alert=await this.alertCtrl.create({
          header: 'Add Category',
          inputs:[
            {
              name:'name',
              placeholder:'add new category',
              type:'text'
            }
          ],
          buttons:[
            {
              text:'Cancel',
              role:'cancel'
            },
            {
              text:'Add',
              handler:(res)=>{
                this.dataFirebase.addUserMuscles(this.user.uid,{categoryName: res.name});
              }
            }
          ]
        });
        await alert.present();
      }
    }
    async openCategory(category)
    {
      console.log(category.categoryId);
      const modal=await this.modalCtrl.create({
        component: ModalPage,
        componentProps: {id: category.categoryId},
        breakpoints:[0,0.5,0.8],
        initialBreakpoint:0.5,
      });
      modal.present();
    }
}
