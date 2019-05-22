(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./libs/index.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Lib = require("./libs/index.js");
    var person = new Lib.Person();
    var mes = person.getMessage();
    console.log(mes);
    console.log('aabbb');
    var member = new Lib.Member();
    var msg2 = member.getTalk();
    console.log(msg2);
});
//# sourceMappingURL=main2.js.map