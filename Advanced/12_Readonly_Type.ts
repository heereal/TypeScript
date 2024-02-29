type ReadonlyPoint = Readonly<Point>;

function modifyReadonlyPoint(point: ReadonlyPoint): void {
  // Cannot assign to 'x' because it is a read-only property.
  // point.x = 100;
}
