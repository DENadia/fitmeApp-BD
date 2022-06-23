import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-view-activities-outdoors-types',
  templateUrl: './view-activities-outdoors-types.page.html',
  styleUrls: ['./view-activities-outdoors-types.page.scss'],
})
export class ViewActivitiesOutdoorsTypesPage implements OnInit {

  @Input() id: string;
  @Input() tName: string;
  exercises=null;
  constructor(private dataService: DatafirebaseService, private modalCtrl: ModalController) {
   }

  ngOnInit() {
   this.dataService.getUserOutdoorsActivityByType(this.id, this.tName).then(res=>{
    this.exercises=res;
   });
  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
