import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
})
export class WorkoutListComponent implements OnInit {
  editors=[
    {
      title: 'Workout',
      category: 'muscular group',
      icon: 'barbell',
      pageCategory: 'workout',
      pageExercises: 'workout-exercises'
    },
    {
      title: 'Yoga',
      category: 'categories',
      icon: 'accessibility'
    },
    {
      title: 'Pain relief',
      category:  'group',
      icon: 'bandage'
    },
    {
      title: 'Outdoors',
      category: 'categories',
      icon: 'bicycle'
    }
  ];
  constructor(public router: Router) { }

  ngOnInit() {}

  public goToDetails(name): void{
    this.router.navigateByUrl(`/${name}`);
  }

}
