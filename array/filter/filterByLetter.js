function filterByLetter(arr, string) {
    return arr.filter(palavra => (palavra[0] === string))
}

let words = ["apple", "banana", "cherry", "apricot", "grape"];
console.log(filterByLetter(words, "a")); // ["apple", "apricot"]