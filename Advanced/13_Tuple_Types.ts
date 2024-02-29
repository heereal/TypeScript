// Tuples in TypeScript allow you to express an array where the type of a fixed number of elements is known
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

function displayTuple(input: [string, number]): string {
  return `The value for ${input[0]} is ${input[1]}.`;
}
console.log(displayTuple(["Age", 30])); // The value for Age is 30.
