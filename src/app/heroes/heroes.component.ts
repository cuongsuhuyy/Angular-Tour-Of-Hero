import { Component, OnChanges, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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

  heroes: Hero[] = [];
  console = console;

  selectedHero?: Hero; //de bien khong bi loi khi duoc goi luc k co du lieu  
    
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    console.log("ngOnInit is call");
    this.getHeroes();
  }

  ngOnChanges(): void {
    console.log("ngOnChanges is call");
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('You are selecting hero id= ' + hero.id)
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes(); Yeu cau lay data tu service, 
    //Truong hop nay se false khi o du an that, vi service se phai doi server tra ve data
    //=> heroSevice phai luon la bat dong bo

    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
