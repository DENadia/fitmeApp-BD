import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.scss'],
})
export class RoutinesComponent implements OnInit {
  routines = [{
    name: 'workout',
    img: "assets/backgrounds/workout.jpg"
  },
    {
      name: 'yoga',
      img: "assets/backgrounds/yoga.jpg"
    },
    {
      name:'streching',
      img: "assets/backgrounds/painrelief.png"

    }
];
  constructor() { }

  ngOnInit() {}
  public goToDetails(name):void{
    console.log("click pe o rutina "+ name);
  }

}
