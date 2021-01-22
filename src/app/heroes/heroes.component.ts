import { UserService } from './../user.service';
import { NavigationBarComponent } from './../navigation-bar/navigation-bar.component';
import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    
  selectedHero: Hero;

  hide:boolean = false;

  private _sortBy: string = 'id';

  get sortBy(): string {
      return this._sortBy;
  }
  set sortBy(value: string) {
      this._sortBy = value;
  }

  heroes: Hero[];

  constructor(private heroService: HeroService, private userService:UserService) { }

  ngOnInit() {
    if (this.userService.isLogged){
      this.hide = this.userService.loggedUser.isAdmin;
    }
    this.getHeroes(); 
  }
  
  getHeroes(): void {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes
          .sort((a,b) => {
            if(this.sortBy === 'id' || this.sortBy === 'name') return (a[this.sortBy] > b[this.sortBy] ? 1 : -1)
            else return (a[this.sortBy] < b[this.sortBy] ? 1 : -1)
          }));
  }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, money:0, items: [], life: 8, strength: 5 })
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}