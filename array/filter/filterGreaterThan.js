// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function isGreaterThan(arr) {
    return arr.filter(num => (num >= 5))
}

let arrayTeste = [1, 2, 4, 667, 3, 45, 2, 5, 7, 8]
console.log(isGreaterThan(arrayTeste))
