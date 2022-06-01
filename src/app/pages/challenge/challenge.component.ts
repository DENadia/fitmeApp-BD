import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss'],
})
export class ChallengeComponent implements OnInit {
  img = 'assets/images/top.png';
    user = {
        name: 'Hello Nadia',
        intro: 'We have prepared great challenges for you! Choose your winner',
        img: 'assets/images/user.png'
    };




  constructor() { }

  ngOnInit() {}

}
