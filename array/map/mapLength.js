function length(arr) {
    return arr.map((word) => word.length)
}

const words = ["hello", "world", "JavaScript", "map"];
console.log(length(words))