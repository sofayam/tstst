"use strict";
var Bar = (function () {
    function Bar() {
    }
    Bar.prototype.tell = function () {
        return "hi";
    };
    return Bar;
}());
exports.Bar = Bar;
/**
 * Baz
 */
var Baz = (function () {
    function Baz(a, b) {
        this.cont = {};
        this.cont['a'] = a;
        this.cont['b'] = b;
        this.cont['c'] = "blaba";
    }
    Baz.prototype.gimme = function () {
        return this.cont;
    };
    return Baz;
}());
exports.Baz = Baz;
//# sourceMappingURL=d.js.map