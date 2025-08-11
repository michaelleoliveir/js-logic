function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] + 1 !== arr[i+1]) {
            return arr[i+1]
        }
    }

    return null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // should return 6
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6])); // should return null
console.log(firstNonConsecutive([1, 3, 4, 5])); // should return 3