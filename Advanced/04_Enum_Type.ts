// Enums are a way of giving friendly names to sets of numeric values.
enum Color4 {
  Red, // 0
  Green, // 1
  Blue, // 2
}
let c: Color4 = Color4.Green; // 1

// You can also manually set values.
enum Color5 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c2: Color5 = Color5.Green; // 2
