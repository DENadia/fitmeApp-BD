import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor-list',
  templateUrl: './editor-list.component.html',
  styleUrls: ['./editor-list.component.scss'],
})
export class EditorListComponent implements OnInit {
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
