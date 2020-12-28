export class Item {
    id?: number;
    name: string;
    price: number;
    strength: number;
    life: number;

    constructor(name: string, price: number, life: number, strength: number) {
        this.name = name;
        this.price = price;
        this.life = life;
        this.strength = strength;
    }
}