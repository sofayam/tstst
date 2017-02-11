interface I1 {
    a: number;
    b: string;
}

let l: I1 = {a: 1, b: "bla"}

var x = {a: 2, b: "foo", c: 2 }

l = x as I1;

function ffx (p: I1) {
    p.a = 1
}