(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //
    var libs;
    (function (libs) {
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
        libs.Person = Person;
    })(libs = exports.libs || (exports.libs = {}));
});
//# sourceMappingURL=Person.js.map