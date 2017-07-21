import { Component } from '@angular/core';

@Component({
  selector: 'rating-inputs',
  templateUrl: './ratinginputs.html',
})

export class Rating {
  _rate1: number = 3;
  _rate2: number = 4;

  _max1: number = 5;
  _max2: number = 10;

  constructor() {
  }

}
