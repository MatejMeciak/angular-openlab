import { ItemService } from '../item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item'
import { UserService } from '../user.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  selectedItem: Item;

  hide:boolean = false;

  items: Item[];

  constructor(private itemService: ItemService, private userService:UserService) { }

  ngOnInit(): void {
    if (this.userService.isLogged){
      this.hide = this.userService.loggedUser.isAdmin;
    }
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
