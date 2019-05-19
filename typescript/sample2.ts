//
class Person {
    name: string;
    age: number;

    constructor() {
        this.name = "takashi"
        this.age = 33
    }

    public echo(): string{
        return `コンにちは${this.name}`
    }
}

let person = new Person();
console.log()
