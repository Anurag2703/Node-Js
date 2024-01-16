// const simple = require('./modulesecond.js');             // This is Common JS style importing
// import { simple } from "./modulesecond.mjs";                // This is ES6 style importing
// import { simple2 as s } from "./modulesecond.mjs";          // Here in ES6 style importing, we can give new name/alias to the imported functions.

// simple();
// s();

import * as a2 from "./modulesecond.mjs"    //This will import everything using the "*"
console.log(a2);
console.log("\n");
console.log(a2.simple());
console.log(a2.simple2());