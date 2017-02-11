"use strict";
var b_1 = require("./b");
var d_1 = require("./d");
var f = new b_1.default(2, 4);
console.log(f.talk("about x  y \
myself"));
console.log("this is the sum " + f.sum() + " which is all");
var b = new d_1.Bar();
console.log("message from b " + b.tell());
var c = new d_1.Baz(2, 3);
console.log(c.gimme());
c.cont['a'] = 6;
ff(990);
//# sourceMappingURL=c.js.map