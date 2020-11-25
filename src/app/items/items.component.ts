import { ItemService } from '../item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  selectedItem: Item;

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  displayItemDetail(item: Item): void {
    this.selectedItem = item; 
  }


  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

}
