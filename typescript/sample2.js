//
var Person = /** @class */ (function () {
    function Person() {
        this.name = "takashi";
        this.age = 33;
    }
    Person.prototype.echo = function () {
        return "\u30B3\u30F3\u306B\u3061\u306F" + this.name;
    };
    return Person;
}());
var person = new Person();
console.log();
