import { Item } from './item';

export class Hero {
    id?: number;
    name: string;
    items: Item[];
    money: number;
    life: number;
    strength: number;

    constructor(name: string, money: number, life: number, strength: number) {
        this.name = name;
        this.money = money;
        this.life = life;
        this.strength = strength;
        this.items = [];
    }
  }
