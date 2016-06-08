"use strict";
/**
 * Foo
 */
var Foo = (function () {
    function Foo(x, y) {
        this.x = x;
        this.y = y;
        this.z = x + y;
        console.log("created a foo with $x and $y");
    }
    Foo.prototype.sum = function () {
        return this.z;
    };
    Foo.prototype.talk = function (inp) {
        return "talking all " + inp;
    };
    return Foo;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Foo;
function doit() {
    var f = new Foo(2, 3);
    console.log(f.sum() + " ");
}
//# sourceMappingURL=b.js.map