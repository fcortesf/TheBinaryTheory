const test = require('ava');
const { customPush } = require('../polyfills/push');

test('basic push test',t => {
    // Arrange
    const originalLength = 100;
    const arrayToPush = Array.from({length: originalLength}, () => Math.floor(Math.random() * 400));
    const value = 115;    
    // Act
    const result = customPush(arrayToPush, value);
    // Assert
    t.is(arrayToPush.length, originalLength + 1 );
    t.is(arrayToPush[arrayToPush.length - 1], value);
});

test('multiples values push test',t => {
    // Arrange
    const originalLength = 100;
    const arrayToPush = Array.from({length: originalLength}, () => Math.floor(Math.random() * 400));
    const values = [115, 120, 130];    
    // Act
    const result = customPush(arrayToPush, ...values);
    // Assert
    t.is(arrayToPush.length, originalLength + 3 );
});