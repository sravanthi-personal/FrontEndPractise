// const Benchmark = require('benchmark');
const suite = new Benchmark.Suite('iterate');
const values = [];

for (let i = 0; i < 100000; i++) {
  values.push(i);
}

suite
  .add('standard for loop', () => {
    for (let i = 0; i < values.length; i++) {
      values[i].toString();
    }
  })
  .add('for...in loop', () => {
    for (let i in values) {
      values[i].toString();
    }
  })
    .add('for...of loop', () => {
    for (let value of values) {
      value.toString();
    }
  })
//   .add('ES6 forEach', () => {
//     values.forEach(value => value.toString());
//   })
//   .add('while loop', () => {
//     let i = -1;

//     while (++i < values.length) {
//       values[i].toString();
//     }
//   })
//   .add('do...while loop', () => {
//     let i = 0;

//     do {
//       values[i].toString();
//     } while (++i < values.length);
//   })

  .on('complete', event => {
    const suite = event.currentTarget;
    const fastestOption = suite.filter('fastest').map('name');

    console.log(`The fastest option is ${fastestOption}`);
    console.log('Benchmark suite complete.')
})

.run();

