// Mapped types allow you to create a new type by transforming properties of an existing type.
type Point = {
  x: number;
  y: number;
};

type NullablePoint = {
  [P in keyof Point]: Point[P] | null;
};

let nullablePoint: NullablePoint = {
  x: null,
  y: 5,
};

console.log(nullablePoint.x); // null
console.log(nullablePoint.y); // 5
