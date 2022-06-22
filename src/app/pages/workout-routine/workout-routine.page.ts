import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { RoutineVisualizerPage } from '../routine-visualizer/routine-visualizer.page';

@Component({
  selector: 'app-workout-routine',
  templateUrl: './workout-routine.page.html',
  styleUrls: ['./workout-routine.page.scss'],
})
export class WorkoutRoutinePage implements OnInit {
  routines=null;
  constructor(private router: Router, 
    private dataService: DatafirebaseService, private modalCtrl:ModalController) { 
      this.dataService.getRoutines('workout', 'workouts').subscribe(res=>{
        this.routines=res;
        console.log(this.routines);
      });
    }

  ngOnInit() {
  }
  async openRoutine(routine)
  {
    console.log(routine.id);
    const modal=await this.modalCtrl.create({
      component: RoutineVisualizerPage,
      componentProps: {id: routine.id, name: routine.name}
    });
    return await modal.present();
  }
}
