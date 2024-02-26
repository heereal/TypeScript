// The || (logical OR) operator can be used to select the first non-falsy value.
const bananas = 3;
const apples = 0;
const oranges = 0;
const pears = 4;

// will be set to 3 since bananas is truthy
const numberOfBananasOrApples = bananas || apples;

// will be set to 4 since oranges is falsy
const numberOfBananasOrApples2 = oranges || pears;

// The logical not operator(!!) forces TypeScript to turn the variable into a boolean value
// will be set to true because bananas is greater than zero
const atLeastOne = !!bananas || !!apples;

// The nullish coalescing operator (??) allows to return a "fallback" value if the left side of the operator is either null or undefined.
// will be set to 0 since apples is a number
const applesOrOranges = apples ?? oranges;

// will be set to 3 since apples is falsy
const numberOfApplesOrOranges = apples || oranges;

const a = null;
const b = undefined;
const c = 7;
const first = a ?? b ?? c; // 7
