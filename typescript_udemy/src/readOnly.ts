// readonly with arrays
function reverseSorted(input: readonly number[]): number[] {
  return input.slice().sort().reverse();
}

const start = [1, 2, 3, 4, 5];
const resultSort = reverseSorted(start);

console.log(start); // [1,2,3,4,5]
console.log(resultSort); // [5,4,3,2,1]

type Neat = readonly number[];
type Long = ReadonlyArray<number>;

//readonly with tuples

type PointTuple = readonly [number, number];

function move(point: PointTuple, x: number, y: number): PointTuple {
  return [point[0] + x, point[1] + y];
}

const point: PointTuple = [0, 0];
const moved = move(point, 10, 10);
console.log(moved); // [10,10]
console.log(point); // [0,0]
