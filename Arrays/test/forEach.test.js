const test = require('ava');
const { customForEach } = require('../polyfills/forEach');

test('basic forEach test',t => {
    // Arrange
    const arr = Array.from({length: 100}, () => Math.floor(Math.random() * 400));
    let access = 0;
    let acum = 0;
    const forEachFunction = (elem) => {
        if (elem > 30) { 
            acum += elem;
        }
        access++;
    };
    arr.forEach(forEachFunction);
    const expectedAcum = acum;
    const expectedAccess = access;
    acum = 0;
    access = 0;
    // Act
    customForEach(arr, forEachFunction);
    // Assert
    t.is(access, expectedAccess, 'Not all items have been accessed');
    t.is(acum, expectedAcum, 'Maybe some duplicated items.');
});