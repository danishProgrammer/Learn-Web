import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/types/types';

@Component({
  selector: 'app-learn-courses',
  templateUrl: './learn-courses.component.html',
  styleUrls: ['./learn-courses.component.scss']
})
export class LearnCoursesComponent implements OnInit {

  cardsInfo:Card[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cardsInfo = [
      {heading:'Javascript Frameworks',name:'Angular',description:'Build performant and progressive Angular applications.',imgPath:'../../.././assets/images/Angular_full_color_logo.svg.png'},
      {heading:'Javascript Frameworks',name:'React',description:'Build performant and progressive React applications.',imgPath:'../../.././assets/images/React-icon.svg.png'},
      {heading:'Javascript Frameworks',name:'Vue',description:'Build performant and progressive Vue applications.',imgPath:'../../.././assets/images/Vue.png'}
    ]
  }

}
