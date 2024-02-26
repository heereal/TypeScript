// for Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for..of Loop
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// for..in Loop
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key, person[key]);
}

// while Loops
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}