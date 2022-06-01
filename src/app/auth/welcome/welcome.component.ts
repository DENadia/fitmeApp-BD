import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  list = [
    {
        title: 'healthy Living',
        intro: 'Lorem ipsum dolor sectetur amet,',
        intro1: 'body & soul',
        img: 'assets/images/1.png'
    },
    {
        title: 'healthy sleep',
        intro: 'Lorem ipsum dolor sectetur amet,',
        intro1: 'body & soul',
        img: 'assets/images/2.png'
    },
    {
        title: 'fresh food & water',
        intro: 'Lorem ipsum dolor sectetur amet,',
        intro1: 'body & soul',
        img: 'assets/images/3.png'
    },
    {
        title: 'Responsive Design',
        intro: 'Lorem ipsum dolor sectetur amet,',
        intro1: 'body & soul',
        img: 'assets/images/4.png'
    }
];

  constructor() { }

  ngOnInit() {}

}
