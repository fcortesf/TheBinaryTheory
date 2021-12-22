const test = require('ava');
const { customSort } = require('../polyfills/sort');
const { customCopy } = require('../polyfills/copy');

test('basic sort test',t => {
    const disorderedArray = [5, 1, 4, 3];
    const disorderedToSort = customCopy(disorderedArray);
    // Act
    customSort(disorderedArray);
    // Assert
    t.is(JSON.stringify(disorderedArray), JSON.stringify(disorderedToSort.sort()));
});