import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-view-exercises-streching-target',
  templateUrl: './view-exercises-streching-target.page.html',
  styleUrls: ['./view-exercises-streching-target.page.scss'],
})
export class ViewExercisesStrechingTargetPage implements OnInit {

  @Input() id: string;
  @Input() tName: string;
  exercises=null;
  constructor(private dataService: DatafirebaseService, private modalCtrl: ModalController) {
   }

  ngOnInit() {
   this.dataService.getUserStrechingExerciseByTarget(this.id, this.tName).then(res=>{
    this.exercises=res;
   });
  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
