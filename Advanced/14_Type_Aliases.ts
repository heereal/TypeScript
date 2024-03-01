// Type aliases allow you to give a new name to a type.
type Rectangle = {
  width: number;
  height: number;
};

function computeArea(rect: Rectangle): number {
  return rect.width * rect.height;
}

console.log(computeArea({ width: 10, height: 5 })); // 50
