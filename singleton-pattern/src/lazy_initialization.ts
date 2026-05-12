export class Singleton2 {
    private static instance: Singleton2 | undefined;

    private constructor() {
        console.log('Singleton2 Constructor called !')
    }

    public static getInstance(): Singleton2 {
        if (!this.instance) {
            this.instance = new Singleton2();
        }

        return this.instance;
    }
}