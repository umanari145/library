(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./libs/Person"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Person_1 = require("./libs/Person");
    var person = new Person_1.Person();
    var mes = person.getMessage();
    console.log(mes);
    console.log('aabbb');
});
//# sourceMappingURL=main.js.map