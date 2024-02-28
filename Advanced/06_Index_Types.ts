// TypeScript supports indexable types which have an index signature to allow for objects with string or number keys.
interface MyDictionary {
  [index: string]: string | number;
}

function getValueFromDict(
  key: string,
  dict: MyDictionary
): string | number | undefined {
  return dict[key];
}

const dict = { name: "Alice", age: 30 };
console.log(getValueFromDict("name", dict)); // Alice
