
import { Component, OnInit } from '@angular/core';
import { Item } from '../item'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  title = 'Items';

  selectedItem: Item;

  items: Item[] = [
    { id: 0, name: "sword",price: 34},
    { id: 1, name: "shield",price: 53},
    { id: 2, name: "helmet",price: 24},
    { id: 3, name: "boots",price: 28},
    { id: 4, name: "ring",price: 16},
  ]

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add(`HeroesComponent: Selected hero id=${item.id}`);
  }

}
