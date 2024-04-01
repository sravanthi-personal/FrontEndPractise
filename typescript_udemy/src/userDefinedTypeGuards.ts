type SquareType = {
  size: number;
};

type RectangleType = {
  width: number;
  height: number;
};

type ShapeType = SquareType | RectangleType;

// A user defined type guard is simply a function that returns a boolean value and
// is annotated in the form of parameter(shape) is Type(Square)
function isSquare(shape: ShapeType): shape is SquareType {
  return "size" in shape;
}

function isRectangle(shape: ShapeType): shape is RectangleType {
  return "width" in shape;
}

function area(shape: ShapeType) {
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }

  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  const _ensure: never = shape;
  return _ensure;
}
