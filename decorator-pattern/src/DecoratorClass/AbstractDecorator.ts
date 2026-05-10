import { BasePizza } from "../BaseClass/AbstractBase.js";

export abstract class Toppings extends BasePizza {
    constructor(protected toppingName: string, protected quantity: number, protected pizza: BasePizza) {
        super(pizza.variant)

        if (quantity <= 0) throw new Error(`Quantity must be positive, got ${quantity}`)
    }

    getDescription(): string {
        return `${this.pizza.getDescription()} + ${this.quantity} ${this.toppingName}`;
    }
}