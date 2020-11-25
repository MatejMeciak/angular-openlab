import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private itemsUrl = 'api/items';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }
  
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(_ => this.messageService.log('fetched ietms')),
        catchError(this.messageService.handleError<Item[]>('getItems', []))
      );
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.messageService.log(`fetched item id=${id}`)),
      catchError(this.messageService.handleError<Item>(`getItem id=${id}`))
    );
  }

  updateItem(item: Item): Observable<any> {
    return this.http.put(this.itemsUrl, item, this.httpOptions).pipe(
      tap(_ => this.messageService.log(`updated item id=${item.id}`)),
      catchError(this.messageService.handleError<any>('updateHero'))
    );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, this.httpOptions).pipe(
      tap((newItem: Item) => this.messageService.log(`added item w/ id=${newItem.id}`)),
      catchError(this.messageService.handleError<Item>('addItem'))
    );
  }

  deleteItem(item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.itemsUrl}/${id}`;
  
    return this.http.delete<Item>(url, this.httpOptions).pipe(
      tap(_ => this.messageService.log(`deleted item id=${id}`)),
      catchError(this.messageService.handleError<Item>('deleteItem'))
    );
  }

  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      // if not search term, return empty item array.
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.messageService.log(`found items matching "${term}"`) :
         this.messageService.log(`no ietms matching "${term}"`)),
      catchError(this.messageService.handleError<Item[]>('searchItems', []))
    );
  }
}
