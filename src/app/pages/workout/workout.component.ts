import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
    categories=null;
    constructor(private dataFirebase: DatafirebaseService,
      private router: Router) {
      this.dataFirebase.getMusclesGroups('workout').subscribe((res)=>{
        console.log(res);
        this.categories=res;
        });
     }
  
    ngOnInit() {}
    public goToDetails(name): void{
      this.router.navigateByUrl(`/${name}`);
    }
    moveChecklist(e): void{
      e.detail.complete();
    }
}
