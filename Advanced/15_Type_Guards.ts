// Type guards allow you to narrow down the type of an object within a certain scope.
function processValue(value: number | string): number {
  if (typeof value === "number") {
    return value * value;
  } else {
    return value.length;
  }
}

console.log(processValue(4)); // 16
console.log(processValue("hello")); // 5
