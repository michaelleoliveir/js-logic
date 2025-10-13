function avgArray(arr) {
    let sum = arr.reduce((acc, arr) => {
        return acc.map((value, index) => value + arr[index])
    })

    return sum.map((v) => v/arr.length);
}

console.log(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]])) // [3, 4, 5, 6]
console.log(avgArray([[1,1,1], [2,2,2], [3,3,3]])) // [6,6,6]