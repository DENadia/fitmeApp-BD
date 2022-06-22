import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild(IonSlides, {static: true}) slides: IonSlides;
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

 constructor(private router: Router) { }

 ngOnInit() {}
onNext() {
  this.slides.isEnd().then(r => {
      if (!r) {
          this.slides.slideNext(1000);
      } else {
          this.router.navigateByUrl('/home');
      }
  });
}

onSkip() {
  this.router.navigateByUrl('/home');
}


 
}
