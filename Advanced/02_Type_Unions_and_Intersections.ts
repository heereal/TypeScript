// Union type
type StringOrNumber = string | number;

// Intersection types
type Name = { name: string };
type Age = { age: number };
type Person3 = Name & Age;
