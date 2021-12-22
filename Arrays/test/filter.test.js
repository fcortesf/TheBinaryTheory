const test = require('ava');
const { customFilter } = require('../polyfills/filter');

test('basic filter test',t => {
    // Arrange
    const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    const filterFunction = (e => e > 21);
    // Act
    const result = customFilter(arr, filterFunction);
    // Assert
    t.is(JSON.stringify(result), JSON.stringify(arr.filter(filterFunction)), 'You should filter better!');
});