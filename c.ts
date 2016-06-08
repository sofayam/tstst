import Foo from "./b"
import { Bar } from "./d"

var f = new Foo(2,4);

console.log(f.talk("about x  y \
myself"));

console.log(`this is the sum ${f.sum()} which is all`)

var b = new Bar();

console.log("message from b " + b.tell());