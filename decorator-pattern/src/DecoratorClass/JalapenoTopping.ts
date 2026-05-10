import type { BasePizza } from "../BaseClass/AbstractBase.js";
import { Toppings } from "./AbstractDecorator.js";

export class JalapenoTopping extends Toppings {
    constructor(quantity: number, pizza: BasePizza) {
        super('Jalapenos', quantity, pizza)
    }

    public getCost(): number {
        return this.pizza.getCost() + this.quantity * 1.80
    }

}