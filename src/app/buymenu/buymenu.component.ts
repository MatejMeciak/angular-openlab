import { HeroService } from './../hero.service';
import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-buymenu',
  templateUrl: './buymenu.component.html',
  styleUrls: ['./buymenu.component.css']
})
export class BuymenuComponent implements OnInit {

  items: Item[];
  hero: Hero;
  heroMoney: number;

  constructor(private itemService: ItemService, private route: ActivatedRoute,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.getItems();
    this.getHero();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
    this.heroMoney = this.hero.money;
  }

  buyItem(item: Item): void {
    if (this.heroMoney > item.price){
      this.heroMoney -= item.price;
      item.isAvailable = false;
      this.hero.items.push(item);
    }
  }

}