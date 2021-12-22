const test = require('ava');
const { customMap } = require('../polyfills/map');

test('basic map test',t => {
    // Arrange
    const arrayToMap = Array.from({length: 100}, () => Math.floor(Math.random() * 400));
    const mapFunction = elem => elem*1000;
    // Act
    const result = customMap(arrayToMap, mapFunction);
    // Assert
    t.is(JSON.stringify(result), JSON.stringify(arrayToMap.map(mapFunction)));
});