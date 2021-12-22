const test = require('ava');
const { customCopy } = require('../polyfills/copy');

test('basic copy test',t => {
    // Arrange
    const arrayToCopy = Array.from({length: 100}, () => Math.floor(Math.random() * 400));
    // Act
    const result = customCopy(arrayToCopy);
    // Assert
    t.is(JSON.stringify(result), JSON.stringify(arrayToCopy), 'Arrays should contains same values!');
    t.not(result, arrayToCopy, 'Not a copy, same reference!!');
});