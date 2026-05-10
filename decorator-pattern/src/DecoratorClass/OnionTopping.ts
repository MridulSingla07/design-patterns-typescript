import type { BasePizza } from "../BaseClass/AbstractBase.js";
import { Toppings } from "./AbstractDecorator.js";

export class OnionTopping extends Toppings {
    constructor(quantity: number, pizza: BasePizza) {
        super('Onions', quantity, pizza)
    }

    public getCost(): number {
        return this.pizza.getCost() + this.quantity * 1.20
    }
}