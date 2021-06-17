//import { HeroService } from './../hero.service';
import { HEROES } from './../models/mock-heroes';
import { Hero } from './../models/hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
hero: Hero = {
  id:1,
  name:'Windstorm'};

heroes= HEROES;
selectedHero?:Hero;

//heroes: Hero[]=[]; 


  constructor() { }

 ngOnInit(){}
   onSelect(hero: Hero): void {
  this.selectedHero = hero;

   
 }


}
