let hobbies: string[] = ["Basketball", "Hockey"];

let stringOrNumber = "this is a string!";
console.log(typeof stringOrNumber); // string

let numberOrNull: number | null;

// these assignments will work
numberOrNull = 3;
numberOrNull = null;

// this is not allowed in TypeScript
// numberOrNull = "invalid assignment";

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
