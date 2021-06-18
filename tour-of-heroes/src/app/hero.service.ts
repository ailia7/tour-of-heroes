import { HEROES } from './models/mock-heroes';
import { Hero } from './models/hero';
import { Injectable } from '@angular/core';

import { Observable ,of} from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
//  getHeroes(): Hero[] {
//     return HEROES;
//   }
 
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  //}
  constructor(private messageService : MessageService) { }
 
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}
