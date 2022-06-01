import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { timer } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public toBeDisplayed=[];
  routines=[{
    routine_type:'workout',
    routineStructure:[
      {
        name:"Full body",
        exercises:[
          {
            exercise_name:"Squats",
            sets:[
              {
                no_set:'1',
                reps:15,
                weight:'30kg',
                note:'some note here'
              },
              {
                no_set:'2',
                reps:15,
                weight:'30kg',
                note:'some other note here'
              }
            ]
          },
          {
            exercise_name:"Lateral raises",
            sets:[
              {
                no_set:'1',
                reps:15,
                weight:'30kg',
                note:'some note here'
              },
              {
                no_set:'2',
                reps:15,
                weight:'30kg',
                note:'some note here'
              },
              {
                no_set:'3',
                reps:15,
                weight:'30kg',
                note:'some note here'
              }

            ]
          }
        ]
      }
    ]
  
  }]

 
 public today;
  constructor() {
  }

  ngOnInit() {
      this.today = Date.now();
      this.routines.forEach((elem)=>
      {
        this.toBeDisplayed.push(
          {
           name:`${elem.routineStructure[0].name}`,
           exercise:`${elem.routineStructure[0].exercises[0].sets.length}`
        });
      })
  }

}
