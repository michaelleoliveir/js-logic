// Given an array of numbers, return a new array that only includes the odd numbers.

function filterOdd(arr) {
    return arr.filter(impar => (impar % 2) !== 0)
}

let arrayTeste = [1, 2, 3, 4, 5, 6, 7]
console.log(filterOdd(arrayTeste))