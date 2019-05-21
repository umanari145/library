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
    var Member = /** @class */ (function () {
        function Member() {
            this.talk = 'talkだよ';
        }
        Member.prototype.getTalk = function () {
            return this.talk;
        };
        return Member;
    }());
    exports.Member = Member;
});
//# sourceMappingURL=Member.js.map