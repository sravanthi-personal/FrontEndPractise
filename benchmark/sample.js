// const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const values = [];

for (let i = 0; i < 1000000; i++) {
    values.push(i);
}

function some(list, predicate) {
    if (list == null) {
        return false;
    }

    for (let i = 0; i < list.length; i++) {
        if (predicate(list[i], i)) {
            return true;
        }
    }

    return false;
}

suite
    .add('Array.prototype.some', () => {
        const processed = values.some(value => value > 990000);
    })
    .add('for loop', () => {
        const processed = some(values, value => value > 990000);
    })
    .on('cycle', event => {
        const benchmark = event.target;

        console.log(benchmark.toString());
    })
    .on('complete', event => {
        const suite = event.currentTarget;
        const fastestOption = suite.filter('fastest').map('name');

        console.log(`The fastest option is ${fastestOption}`);
        console.log('Benchmark suite complete.')
    })

   // .on('complete', () => console.log('Benchmark suite complete.'))
    .run();