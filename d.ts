export class Bar {
    tell() {
        return "hi"
    }
}


/**
 * Baz
 */
export class Baz {
    cont = {};
    constructor(a,b : any) {
        this.cont['a'] = a
        this.cont['b'] = b
        this.cont['c'] = "blaba"
    }
    gimme(): any {
        return this.cont;
    }
}