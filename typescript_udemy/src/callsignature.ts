type AddSign = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  debugName?: string;
};

const addSign: AddSign = (a: number, b: number, c?: number) => {
  return a + b + (c == null ? 0 : c);
};

addSign.debugName = "Additional function";

//new
type PointCreator = {
  new (x: number, y: number): { x: number; y: number };
};

const Pointt: PointCreator = class {
  constructor(public x: number, public y: number) {}
};
