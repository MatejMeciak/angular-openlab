import { HeroService } from './../hero.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() sortBy:string;
  @Output() sortByChange = new EventEmitter<string>();

  display:boolean = false;

  sortProperties: string[] = [
    'id',
    'name',
    'money',
    'life',
    'strength'
]; 

  constructor(private heroComponent: HeroesComponent) { }

  ngOnInit(): void {
  }


  dropdown(): void {
    if (this.display) this.display = false;
    else this.display = true
  }

  select(sortBy: string): void {
    this.sortBy = sortBy;
    this.sortByChange.emit(this.sortBy);
    this.heroComponent.getHeroes();
    this.dropdown();
  }
}
