class Startup {
    public static main(): number {
        console.log('Hello  my World');
        return 0;
    }
}

interface Foo {
    i : number;
    s: string;
}

interface Foo1 {
    i: boolean;
}

type mess = Foo1;
var m: mess = {i:true};
m.i = true;
type t =  number|null|string;

var t1: t=1;

t1.toString()
t1 = 123;

function ff (t3: t) {
    console.log("calling ff in a");
    var s: string;
    var n: number;
    var v: any;
    if (typeof(t3) === "string") {
        s = t3
    } else if(typeof(t3) === "number") {
        n = t3;
    } else {
        v = t3;
    }
    
}

ff(1);
ff(null);

function fff(n: number) {
    return n * 2
}
let y:number|null

var f : Foo = {i:1,s:"a"}
Startup.main();
y = null;
var finished = false;
var ctr: number = 1
while(finished === false) {
    if (ctr===1){
        ctr += 1;
        y = 3;
        fff(y);
    } else if (ctr === 2) {
        //fff(y) // not fair, this is fine
        finished = true
    }
}