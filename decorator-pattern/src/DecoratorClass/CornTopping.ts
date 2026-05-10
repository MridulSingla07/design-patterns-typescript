import type { BasePizza } from "../BaseClass/AbstractBase.js";
import { Toppings } from "./AbstractDecorator.js";

export class CornTopping extends Toppings {
    constructor(quantity: number, pizza: BasePizza) {
        super('Corns', quantity, pizza)
    }

    public getCost(): number {
        return this.pizza.getCost() + this.quantity * 0.10
    }

}