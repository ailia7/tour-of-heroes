import { HEROES } from './models/mock-heroes';
import { Hero } from './models/hero';
import { Injectable } from '@angular/core';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  getHeroes(): Hero[] {
    return HEROES;
  }
 


  constructor() { }
}
