/*1) Напишите функцию getDays, которая принимает год и месяц, а возвращает
количество дней в месяце*/

// getDays( 2021 , 4) //30
// getDays( 2021 , ‘April’) //30


/*
function getDays(year, mnth) {
    if (typeof year !== 'number' || year < 1 || mnth > 12 || mnth < 1) {
        return 'ERROR! Only Numbers please!';
    }
    if (mnth === 4 || mnth === 'April' || mnth === 6 || mnth === 'June' || mnth === 9 || mnth === 11
        || mnth === 'September' || mnth === 'November') {
        return 30;
    } else if (year % 4 === 0 && (mnth === 2 || mnth === 'February')) {
        return 29;
    } else if (year % 4 !== 0 && (mnth === 2 || mnth === 'February')) {
        return 28;
    } else if (mnth === 1 || mnth === 3 || mnth === 5 || mnth === 7 || mnth === 8 || mnth === 10 || mnth === 12
        || mnth === 'July' || mnth === 'January' || mnth === 'March'
        || mnth === 'May' || mnth === 'August' || mnth === 'October' || mnth === 'December') {
        return 31;
    }
}

console.log(getDays(-1, 1))

*/


/*2) Через прототип расширьте встроенный объект Number методом isOdd(), который
возвращает true, если число нечетное.*/
/*
Number.prototype.isOdd = function () {
    if (this % 2 === 0) return false;
    if (this % 2 !== 0) return true;
}
*/


/*3) Написать функцию every, которая будет принимать первым аргументом массив, а
вторым функцию колбэк(которая будет принимать каждый элемент массива и
возвращать true либо false). Результатом функции должно быть логическое
выражение true/false в зависимости от того, выполняется ли условие для каждого
из элементов.
    Example:*/
// every([8, 2, 4], function (num){
//     return num%2===0
// }) // true