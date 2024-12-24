function filterDistinct(arr) {
    return arr.filter((numero, index) => arr.indexOf(numero) === index)
}

let arr = [1, 2, 2, 2, 5, 1, 2, 6, 7, 8, 3];
console.log(filterDistinct(arr)); 