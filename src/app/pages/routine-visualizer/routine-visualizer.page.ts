import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-routine-visualizer',
  templateUrl: './routine-visualizer.page.html',
  styleUrls: ['./routine-visualizer.page.scss'],
})
export class RoutineVisualizerPage implements OnInit {

  @Input()id;
  @Input()name;
  types=null;
  constructor(private dataService: DatafirebaseService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.dataService.getRoutineExercises('workout', 'workouts', this.id).subscribe(res=>{
      this.types=res;
      console.log(this.types);
     });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
