function every(arr, cb) {
    let result = true;

    // if (!Array.isArray(arr) || arr.length === 0 || typeof cb !== 'function') {
    //     return false;
    //  }
    arr.forEach((num) => {
        result = result && cb(num)
    })

    return result;
}

console.log(every([1, 7],))