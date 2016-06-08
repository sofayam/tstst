/**
 * Foo
 */
export default class Foo {
    z : number;
    constructor(public x: number,public y: number) {
     this.z = x + y;
        console.log(`created a foo with $x and $y`)
    }

    sum() : number {
        return this.z
    }
    talk(inp : string) : string {
        return "talking all " + inp
    }
}

function doit() {
    var f = new Foo(2,3);
    console.log(f.sum() + " ");
}