import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  private name: string = 'Nguyễn Phú Minh';
  
  constructor() { }

  ngOnInit() {
  }

}
