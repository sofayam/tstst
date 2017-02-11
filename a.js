var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello  my World');
        return 0;
    };
    return Startup;
}());
var m = { i: true };
m.i = true;
var t1 = 1;
t1.toString();
t1 = 123;
function ff(t3) {
    console.log("calling ff in a");
    var s;
    var n;
    var v;
    if (typeof (t3) === "string") {
        s = t3;
    }
    else if (typeof (t3) === "number") {
        n = t3;
    }
    else {
        v = t3;
    }
}
ff(1);
ff(null);
function fff(n) {
    return n * 2;
}
var y;
var f = { i: 1, s: "a" };
Startup.main();
y = null;
var finished = false;
var ctr = 1;
while (finished === false) {
    if (ctr === 1) {
        ctr += 1;
        y = 3;
        fff(y);
    }
    else if (ctr === 2) {
        //fff(y) // not fair, this is fine
        finished = true;
    }
}
//# sourceMappingURL=a.js.map