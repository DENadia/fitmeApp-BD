import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
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
    constructor(private dataFirebase: DatafirebaseService,
      private router: Router,
      private alertCtrl: AlertController,
      private modalCtrl: ModalController) {
      this.dataFirebase.getUserMusclesGroups().subscribe((res)=>{
        console.log(res);
        this.categories=res;
        });
     }
  
    ngOnInit() {}
    public goToDetails(name): void{
      this.router.navigateByUrl(`/${name}`);
    }
    moveChecklist(e): void{
      const draggedItem = this.categories.splice(e.detail.from,1)[0];
      this.categories.splice(e.detail.to,0,draggedItem);
     //this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
     e.detail.complete();
    }
    async addCategory()
    {
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
              // console.log("Trying to add new category");
              this.dataFirebase.addUserMuscles({categoryName: res.name});
            }
          }
        ]
      });
      await alert.present();
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
