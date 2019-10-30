"use strict";

import LL from "./LinkedList";

// testing linkedlist

const lL = new LL<number>();
lL.add(1);
lL.add(2);
lL.add(3);
lL.add(4);
lL.add(0);
console.log(lL.toString());
console.log(lL.size());

lL.add(4, 1);
console.log(lL.toString());
console.log(lL.size());
lL.add(4, 0);
console.log(lL.toString());
console.log(lL.size());

console.log("get 0", lL.get(0));
// console.log(lL.toString());
console.log("get 1", lL.get(1));
// console.log(lL.toString());
console.log("get 5", lL.get(5));
// console.log(lL.toString());
console.log("get 3", lL.get(3));
// console.log(lL.toString());
console.log("get -1", lL.get(-1));
// console.log(lL.toString());
console.log("remove 0", lL.remove(0));
console.log(lL.toString());
console.log("remove 2", lL.remove(2));
console.log(lL.toString());
console.log(lL.removeItem(4));
console.log(lL.removeItem(1));

console.log(lL.toString());
