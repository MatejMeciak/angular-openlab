import { allItems } from './mock-items';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private messageService: MessageService) { }
  
  getItems(): Observable<Item[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('Service: fetched items');
    return of(allItems);
  }

  getItem(id: number): Observable<Item> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`Service: fetched item id=${id}`);
    return of(allItems.find(item => item.id === id));
  }
}
