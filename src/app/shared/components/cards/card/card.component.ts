import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/types/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() card!:Card;
  ngOnInit(): void {
  }

}
