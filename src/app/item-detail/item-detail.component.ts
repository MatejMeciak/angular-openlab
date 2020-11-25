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

  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}


