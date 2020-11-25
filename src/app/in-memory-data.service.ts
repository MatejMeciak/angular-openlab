import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice', money: 50, items: [], life: 10, strength: 4 },
      { id: 2, name: 'Marco', money: 100, items: [], life: 9, strength: 3 },
      { id: 3, name: 'Bombasto', money: 10, items: [], life: 10, strength: 1 },
      { id: 4, name: 'Celeritas', money: 0, items: [], life: 4, strength: 5 },
      { id: 5, name: 'Magneta', money: 0, items: [], life: 10, strength: 3 },
      { id: 6, name: 'RubberMan', money: 0, items: [], life: 7, strength: 4 },
      { id: 7, name: 'Dynama', money: 0, items: [], life: 10, strength: 7 },
      { id: 8, name: 'Dr IQ', money: 0, items: [], life: 4, strength: 3 },
      { id: 9, name: 'Magma', money: 0, items: [], life: 5, strength: 7 },
      { id: 10, name: 'Tornado', money: 0, items: [], life: 10, strength: 9 },
    ];
    const items = [
      { id: 1, name: "Sword", price: 34, amount: 5 },
      { id: 2, name: "Shield", price: 53, amount: 5 },
      { id: 3, name: "Helmet", price: 24, amount: 5 },
      { id: 4, name: "Boots", price: 28, amount: 5 },
      { id: 5, name: "Ring", price: 16, amount: 5 },
    ];

    return {heroes, items};
  }

  genId(object: any[]): number {
    return object.length > 0 ? Math.max(...object.map(obj => obj.id)) + 1 : 1;
  }
}