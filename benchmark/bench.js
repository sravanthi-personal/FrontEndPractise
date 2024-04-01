const Benchmark = require('benchmark');

const suite = new Benchmark.Suite('My Performance Test');

suite.on('complete', event => {
    const suite = event.currentTarget;
    const fastestOption = suite.filter('fastest').map('name');
    console.log(`The fastest option is ${fastestOption}`);
});


suite.on('cycle', event => {
    const benchmark = event.target;
    console.log(benchmark.toString());
});


suite
    .add('RegExp#test',()  => /o/.test('hello world'))
    .add('String#indexOf',() => 'hello world'.indexOf('o')> -1)
.run();