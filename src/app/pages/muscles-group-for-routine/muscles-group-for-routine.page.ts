import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { EditExercisesCategoryPage } from '../edit-exercises-category/edit-exercises-category.page';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-muscles-group-for-routine',
  templateUrl: './muscles-group-for-routine.page.html',
  styleUrls: ['./muscles-group-for-routine.page.scss'],
})
export class MusclesGroupForRoutinePage implements OnInit {
  exerciseName:string;
  categories=null;
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
        this.dataFirebase.getUserMusclesGroups(this.user.uid).subscribe((res)=>{
          this.categories=res;
          this.categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
          });
      }
    }

    public goToDetails(name): void{
      this.router.navigateByUrl(`/${name}`);
    }
    async addCategory()
    {
      if(this.user){
        const alert=await this.alertCtrl.create({
          header: 'Add Category',
          cssClass: 'alert-btn',
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
              role:'cancel',
            },
            {
              text:'Add',
              handler:(res)=>{
                console.log(res.name);
                if(this.categories.findIndex((category)=>{
                return category.categoryName===res.name
              })!==-1){
                  this.showAlert('Error', 'Category already existing! Please add a new one');
                }
                else{
                  this.dataFirebase.addUserMuscles(this.user.uid,{categoryName: res.name});
                }
              }
            }
          ]
        });
        await alert.present();
      }
    }
    async openCategory(category)
    {
      const modal=await this.modalCtrl.create({
        component: ModalPage,
        componentProps: {category: category},
        breakpoints:[0,0.5,0.8],
        initialBreakpoint:0.5,
      });
      modal.present();
    }
    async categoryExercise(category){
      if(this.user){
        const modal=await this.modalCtrl.create({
          component: EditExercisesCategoryPage,
          breakpoints:[0,0.5,0.8],
          initialBreakpoint:0.8,
          componentProps: {
            categories: this.categories,
            id: this.user.uid, 
            cName: category.categoryName
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
    dismiss(){
      this.modalCtrl.dismiss({active:1});
    }
}
