// Discriminated unions are useful for being able to discriminate between two different objects with different types.
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

const shapes: Shape[] = [
  {
    kind: "circle",
    radius: 5,
  },
  {
    kind: "square",
    sideLength: 10,
  },
];

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return shape.radius * 2;
    case "square":
      return shape.sideLength * 2;
  }
}
