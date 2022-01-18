const Number = require('../prototype');

describe('Through the prototype, extend the built-in Number object with the isOdd() method, which returns true if the number is odd', () => {
    test('test', () => {
        expect(true).toBe(true);
    });
    test('With even number', () => {
        expect((6).isOdd()).toBe(false);
    });
    test('With odd number', () => {
        expect((11).isOdd()).toBe(true);
    });
});