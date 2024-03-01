// The Partial utility type makes all properties of a provided type optional.
// So you can have objects like { x: 10 } or { y: 5 } or even {} without any type errors.
type Point = {
  x: number;
  y: number;
};

type PartialPoint = Partial<Point>;

// Conversely, the Required utility type ensures that all properties of a given type are required.
type CompletePoint = Required<PartialPoint>;

// Property 'y' is missing in type '{ x: number; }'.
// const point: CompletePoint = { x: 10 };
