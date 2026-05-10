import { BasePizza } from "./AbstractBase.js";

export class PotCheesePizza extends BasePizza {
    constructor() {
        super('Pot Cheese Pizza')
    }
    getCost(): number {
        return 240;
    }
}