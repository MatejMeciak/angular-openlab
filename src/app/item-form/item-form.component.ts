import { ItemService } from './../item.service';
import { Item } from './../item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  model = new Item('', 0, 0, 0);

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.itemService.addItem(this.model).subscribe();
 }
}
