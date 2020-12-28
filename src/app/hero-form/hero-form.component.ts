import { HeroService } from './../hero.service';
import { Component } from '@angular/core';

import { Hero } from '../hero';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  constructor(private heroService:HeroService){

  }

  model = new Hero('', 0, 0, 0);

  onSubmit():void {
      this.heroService.addHero(this.model).subscribe();
   }
}