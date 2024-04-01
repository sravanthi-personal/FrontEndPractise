interface Point2DI {
  x: number;
  y: number;
}

interface Point3DI extends Point2DI {
  z: number;
}

export const point: Point3DI = {
  x: 0,
  y: 0,
  z: 0,
};
