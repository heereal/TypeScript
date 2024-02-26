let names: string[] = ["Alice", "Bob", "Charlie"]; // array type syntax
let ids: Array<number> = [101, 102, 103]; // generic array type

// Adding and Removing Elements
let colors: string[] = ["red", "blue"];
colors.push("yellow"); // ["red", "blue", "yellow"]
colors.unshift("green"); // ["green", "red", "blue", "yellow"]
colors.pop(); // ["green", "red", "blue"]
colors.shift(); // ["red", "blue"]
