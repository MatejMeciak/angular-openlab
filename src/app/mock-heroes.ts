import { Item } from './item';
import { Hero } from './hero';

const allItems: Item[] = [
  { id: 0, name: "sword",price: 34},
  { id: 1, name: "shield",price: 53},
  { id: 2, name: "helmet",price: 24},
  { id: 3, name: "boots",price: 28},
  { id: 4, name: "ring",price: 16},
]

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' , items: allItems},
  { id: 12, name: 'Narco' , items: allItems},
  { id: 13, name: 'Bombasto' , items: allItems},
  { id: 14, name: 'Celeritas' , items: allItems},
  { id: 15, name: 'Magneta' , items: allItems},
  { id: 16, name: 'RubberMan', items: allItems },
  { id: 17, name: 'Dynama' , items: allItems},
  { id: 18, name: 'Dr IQ' , items: allItems},
  { id: 19, name: 'Magma' , items: allItems},
  { id: 20, name: 'Tornado', items: allItems}
];