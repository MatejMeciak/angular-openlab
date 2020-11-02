import { ActivatedRoute } from '@angular/router';
import { ItemService } from './../item.service';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item;

  @Input() items: Item[];

  constructor(private route: ActivatedRoute,private itemService:ItemService) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }
}


