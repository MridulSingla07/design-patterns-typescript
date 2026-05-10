export abstract class BasePizza {
    constructor(public readonly variant: string) {
    }

    abstract getCost(): number;

    getDescription(): string {
        return this.variant;
    }
}