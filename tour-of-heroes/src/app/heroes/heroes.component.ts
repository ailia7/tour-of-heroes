import { HeroService } from './../hero.service';
//import { HEROES } from './../models/mock-heroes';
import { Hero } from './../models/hero';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
hero: Hero = {
  id:1,
  name:'Windstorm'};

//heroes= HEROES;
selectedHero?:Hero;

heroes: Hero[]=[]; 


  constructor(private heroService : HeroService ,private messageService: MessageService) { }

 ngOnInit(){
   this.getHeroes();

 }

   onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);


   
 }
//  getHeroes(): void{
//   this.heroes = this.heroService.getHeroes();
// }

getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

}
