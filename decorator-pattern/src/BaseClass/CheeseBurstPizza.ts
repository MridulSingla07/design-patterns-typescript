import { BasePizza } from "./AbstractBase.js";

export class CheeseBurstPizza extends BasePizza {
    constructor() {
        super('Cheese Burst Pizza')
    }
    getCost(): number {
        return 200;
    }
}