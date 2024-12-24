function filterPositive(arr) {
    return arr.filter(positivo => (positivo > 0))
}

let numbers = [-5, 3, 4, -1, 6, -2];
console.log(filterPositive(numbers)); // [3, 4, 6]