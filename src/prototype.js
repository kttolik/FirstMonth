Number.prototype.isOdd = function () {
    if (this % 2 === 0) return false;
    if (this % 2 !== 0) return true;
}

module.exports = Number;
