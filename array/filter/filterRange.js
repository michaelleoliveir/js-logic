function filterRange(arr, min, max) {
    return arr.filter(numero => numero >= min && numero <= max)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterRange(numbers, 3, 7)); // [3, 4, 5, 6, 7]