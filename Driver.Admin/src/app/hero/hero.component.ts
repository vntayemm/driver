import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/hero/hero.model';

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heros: Hero[] = HEROES;

  constructor() { 

  }

  ngOnInit() {
  }

}
