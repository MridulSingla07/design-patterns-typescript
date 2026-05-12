export class Singleton1 {
    private static instance: Singleton1 = new Singleton1();

    private constructor() {
        console.log('Singleton1 Constructor called !')
    }

    public static getInstance(): Singleton1 {
        // inside static methods this refers to class and not object
        // Singleton1.instance is equivalent to this.instance since it is inside a static method

        return Singleton1.instance
    }
}

