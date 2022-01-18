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
module.exports = getDays;