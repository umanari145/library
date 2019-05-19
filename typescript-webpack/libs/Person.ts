
export default class Person {
    name: string;
    age: number;

    constructor() {
        this.name = "takashi"
        this.age = 33
    }

    public getMessage(): string{
        let msg = `こんにちは ${this.name} さん
私の年齢は${this.age}です。`
        return msg
    }
}
