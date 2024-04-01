type IsNumber<T> = T extends number ? "number" : "other";

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

const isNumber = (value: unknown) =>
  typeof value === "number" ? "number" : "other";

const withNumber = isNumber(123);
const withOther = isNumber("hello");
