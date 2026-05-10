import { BasePizza } from "./AbstractBase.js";

export class HandTossedPizza extends BasePizza {
    constructor() {
        super('Hand Tossed Pizza')
    }
    getCost(): number {
        return 120;
    }
}