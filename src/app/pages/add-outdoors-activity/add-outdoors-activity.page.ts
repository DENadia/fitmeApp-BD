import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-add-outdoors-activity',
  templateUrl: './add-outdoors-activity.page.html',
  styleUrls: ['./add-outdoors-activity.page.scss'],
})
export class AddOutdoorsActivityPage implements OnInit {

  @Input() id: string;
  activityName='';
  type='';
  types: any[];
  constructor(private dataService: DatafirebaseService,  private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController, private auth: Auth) { 
    }

  ngOnInit() {
    if(this.id)
    {
      this.dataService.getUserOutdoorsTypes(this.id).subscribe((res)=>{
        this.types=res;
        this.types.sort((a, b) => a.name.localeCompare(b.name));
        });
    }
  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  async addActivity()
  {
    this.dataService.addUserOutdoorsActivity(this.id,{name:this.activityName, type:this.type});
    const toast=await this.toastCtrl.create({
      message:'Activity added!',
      duration:1000
    });
    toast.present();
    this.dismiss();
  }

}
