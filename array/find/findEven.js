function findEven(arr) {
    return arr.find((num) => num % 2 == 0)
}

const numeros = [3, 7, 11, 14, 19];
console.log(findEven(numeros))