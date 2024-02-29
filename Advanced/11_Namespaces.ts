// Namespaces are a way of logically grouping related code.
namespace MyNamespace {
  export const myValue: number = 10;
}

namespace Geometry {
  export function areaOfRectangle(width: number, height: number): number {
    return width * height;
  }

  export function areaOfCircle(radius: number): number {
    return Math.PI * radius * radius;
  }
}

console.log(Geometry.areaOfRectangle(10, 5)); // 50
console.log(Geometry.areaOfCircle(7)); // 153.93804002589985
