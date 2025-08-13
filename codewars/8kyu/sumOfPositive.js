function positiveSum(arr) {
    const array = arr.filter((num) => {
        return num >= 0;
    })

    return array.reduce((acc, current) => acc + current, 0)
}

console.log(positiveSum([1, -4, 7, 12])); // 1 + 7 + 12 = 20
console.log(positiveSum([-1, -2, -3, -4])); // 0
console.log(positiveSum([2, 4, 6, 8, 10])); // 2 + 4 + 6 + 8 + 10 = 30