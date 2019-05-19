(function () {
    'use strict';

    var Person = /** @class */ (function () {
        function Person() {
            this.name = "takashi";
            this.age = 33;
        }
        Person.prototype.getMessage = function () {
            var msg = "\u3053\u3093\u306B\u3061\u306F " + this.name + " \u3055\u3093\n\u79C1\u306E\u5E74\u9F62\u306F" + this.age + "\u3067\u3059\u3002";
            return msg;
        };
        return Person;
    }());

    //
    var person = new Person();
    var mes = person.getMessage();
    console.log(mes);
    console.log('aabbb');

}());
