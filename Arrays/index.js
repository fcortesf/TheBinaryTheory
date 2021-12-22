const polyfills = require('./polyfills');
console.log(polyfills);

const foo = [1, 2, 3, 4, 5, 6];
console.log(polyfills.customSplice(foo, 2, 2, [20, 30]));