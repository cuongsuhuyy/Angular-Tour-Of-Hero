import { Component, OnChanges, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnChanges {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;
  console = console;

  selectedHero?: Hero; //de bien khong bi loi khi duoc goi luc k co du lieu
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.hero.name);
  }

}
