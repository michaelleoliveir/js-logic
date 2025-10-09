Array.prototype.first = function() {
    return this.length > 0 ? this[0] : undefined
};

Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : undefined
};

console.log([2,5,7,3,4].first())
console.log([2,5,7,3,4].last())