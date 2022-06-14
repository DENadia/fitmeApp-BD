import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { MusclesCategory } from 'src/app/models/muscles-category';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() id: string;
  category: MusclesCategory=null;
  constructor(private dataService: DatafirebaseService,  private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl:AlertController) { }

  ngOnInit() {
    this.dataService.getUserMusclesGroupById(this.id).subscribe(res =>{
      this.category=res;
      console.log(this.category);
    });
  }
  async updateCategory()
  {
    this.dataService.updateUserMuscle( this.category);
    const toast=await this.toastCtrl.create({
      message:'Category updated!',
      duration:1000
    });
    toast.present();
  }
//   async update()
//     {
//   const alert=await this.alertCtrl.create({
//     header: 'Edit Category',
//     inputs:[
//       {
//         name:'name',
//         value: this.category.categoryName,
//         type:'text'
//       }
//     ],
//     buttons:[
//       {
//         text:'Cancel',
//         role:'cancel'
//       },
//       {
//         text:'Update',
//         handler:(res)=>{
//           // console.log("Trying to add new category");
//           this.dataService.updateUserMuscle(this.category);
//         }
//       }
//     ]
//   });
//   await alert.present();
// }
  async deleteCategory()
  {
    await this.dataService.deleteUserMuscle( this.category);
    this.modalCtrl.dismiss();
  }

}
