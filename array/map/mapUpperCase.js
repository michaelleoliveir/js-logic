function upperCase(arr) {
    return arr.map((word) => word.toUpperCase())
}

const words = ["apple", "banana", "cherry"];
console.log(upperCase(words))