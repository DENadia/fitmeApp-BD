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
      category: 'yoga',
      icon: 'accessibility',
      pageCategory: 'yoga-styles',
      pageExercises: 'yoga-exercises'
    },
    {
      title: 'Pain relief',
      category:  'group',
      icon: 'bandage',
      pageCategory: 'streching-targets',
      pageExercises: 'streching-exercises'
    },
    {
      title: 'Outdoors',
      category: 'categories',
      icon: 'bicycle',
      pageCategory: 'outdoors-types',
      pageExercises: 'outdoors-activities'
    }
  ];
  constructor(public router: Router) { }

  ngOnInit() {}

  public goToDetails(name): void{
    this.router.navigateByUrl(`/${name}`);
  }

}
