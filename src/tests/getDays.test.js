const getDays = require('../getDays');

describe('takes the year and month and returns number of days in a month', () => {
    test('getDays', () => {
        expect(getDays(2021, 1)).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2021, 'January')).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2012, 3)).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2012, 'March')).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2021, 4)).toEqual(30);
    })
    test('getDays', () => {
        expect(getDays(2021, 'April')).toEqual(30);
    })
    test('getDays', () => {
        expect(getDays(2021, 5)).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2021, 6)).toEqual(30);
    })
    test('getDays', () => {
        expect(getDays(2021, 'June')).toEqual(30);
    })
    test('getDays', () => {
        expect(getDays(2021, 7)).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2012, 'July')).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2021, 8)).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2012, 'August')).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2021, 9)).toEqual(30);
    })
    test('getDays', () => {
        expect(getDays(2021, 'September')).toEqual(30);
    })
    test('getDays', () => {
        expect(getDays(2021, 10)).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2012, 'October')).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2021, 11)).toEqual(30);
    })
    test('getDays', () => {
        expect(getDays(2021, 'November')).toEqual(30);
    })
    test('getDays', () => {
        expect(getDays(2021, 12)).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2012, 'December')).toEqual(31);
    })
    test('getDays', () => {
        expect(getDays(2021, 2)).toEqual(28);
    })
    test('getDays', () => {
        expect(getDays(2012, 2)).toEqual(29);
    })
    test('getDays', () => {
        expect(getDays(2012, 'February')).toEqual(29);
    })
    test('getDays', () => {
        expect(getDays(2011, 'February')).toEqual(28);
    })
    test('getDays', () => {
        expect(getDays('qwe', 2)).toEqual("ERROR! Only Numbers please!");
    })
    test('getDays', () => {
        expect(getDays(2022, 0)).toEqual("ERROR! Only Numbers please!");
    })
    test('getDays', () => {
        expect(getDays(2022, 13)).toEqual("ERROR! Only Numbers please!");
    })
})