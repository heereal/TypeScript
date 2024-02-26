class Animal {
  // Fields: These are variables within the class that store data.
  name: string;

  // Constructor: This is a special method used to initialize a new instance of the class.
  constructor(name: string) {
    this.name = name;
  }

  // Methods: Functions defined within the class to perform specific tasks.
  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} barks`);
  }
}
const myDog: Dog = new Dog("Rex");
myDog.speak(); // Rex barks
