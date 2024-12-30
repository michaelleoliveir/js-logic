function flatten(arr) {
    return arr.reduce((unida, array) => unida.concat(array), [])
}

let arrayTeste = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrayTeste))