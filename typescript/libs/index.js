(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Person", "./Member"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Person_1 = require("./Person");
    exports.Person = Person_1.Person;
    var Member_1 = require("./Member");
    exports.Member = Member_1.Member;
});
//# sourceMappingURL=index.js.map