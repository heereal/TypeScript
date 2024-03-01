// Abstract classes in TypeScript serve as a base class and cannot be instantiated.
// They can, however, be extended.
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving...");
  }
}

// The Animal class has an abstract method makeSound, which is then implemented by the Dog subclass.
class Dog extends Animal {
  makeSound() {
    console.log("Bark!");
  }
}

const myDog = new Dog();
myDog.makeSound(); // Outputs: Bark!
myDog.move(); // Outputs: Moving...

//

abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle2 extends Shape {
  constructor(
    public width: number,
    public height: number
  ) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

const myCircle: Circle = new Circle(5);
const myRect: Rectangle2 = new Rectangle2(4, 7);

console.log(myCircle.area()); // 78.53981633974483
console.log(myRect.area()); // 28
