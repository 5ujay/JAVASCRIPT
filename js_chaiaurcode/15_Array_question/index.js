// implement of custom foreach
Array.prototype.forEach = function (callback) {
    for (i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }

}

// implement of a professional custom foreach

Array.prototype.forEach = function (callback, thiscontext) {
    if (typeof callback !== 'function') {
        throw 'not a function'
    }

    const length = this.length

    let i = 0;
    while (i < length) {
        if (this.hasOwnProperty(i)) {
            callback.call(thiscontext, this[i], i, this)
        }
        i++
    }
}