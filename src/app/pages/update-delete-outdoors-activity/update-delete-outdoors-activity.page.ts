import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-update-delete-outdoors-activity',
  templateUrl: './update-delete-outdoors-activity.page.html',
  styleUrls: ['./update-delete-outdoors-activity.page.scss'],
})
export class UpdateDeleteOutdoorsActivityPage implements OnInit {

  @Input() idUser;
  @Input() idActivity;
  activity: any=null;
  types: any[]=[];
  constructor(private dataService: DatafirebaseService, private modalCtrl: ModalController, 
    private toastCtrl: ToastController, private alertCtrl: AlertController) { 

  }

  ngOnInit() {
    if(this.idUser)
    {
      this.dataService.getUserOutdoorsTypes(this.idUser).subscribe((res)=>{
        this.types=res;
        this.types.sort((a, b) => a.name.localeCompare(b.name));
        });
      this.dataService.getUserOutdoorsActivityById(this.idUser, this.idActivity).subscribe(res =>{
        this.activity=res;
        console.log(this.activity);
      });
    }
  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  updateActivity()
  {
    this.dataService.updateUserOutdoorsActivity(this.idUser, this.activity);
    this.dismiss();
  }
  deleteActivity(){
    this.dataService.deleteUserOutdoorsActivity(this.idUser,this.idActivity);
    this.dismiss();
  }

}
