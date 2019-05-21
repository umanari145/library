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
    var index_js_1 = require("./libs/index.js");
    var person = new index_js_1.Person();
    var mes = person.getMessage();
    console.log(mes);
    console.log('aabbb');
    var member = new index_js_1.Member();
    var msg2 = member.getTalk();
    console.log(msg2);
});
//# sourceMappingURL=main.js.map