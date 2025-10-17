function distancesFromAverage(arr) {
    const avg = arr.reduce((acc, current) => acc + current, 0) / arr.length;

    return arr.map((num) => Number((num - avg).toFixed(2)) * -1)
}

console.log(distancesFromAverage([1, 2, 3, 4, 5])); // [2, 1, 0, 1, 2]
console.log(distancesFromAverage([1, 1, 1, 1, 1, 1])); // [0, 0, 0, 0, 0, 0]
console.log(distancesFromAverage([1, 2, 3, 4])); // [1.5, 0.5, 0.5, 1.5]