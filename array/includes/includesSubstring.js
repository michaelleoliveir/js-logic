function contemSubstring(palavra, substring) {
    return palavra.includes(substring)
}

console.log(contemSubstring("programação", "grama")); // true
console.log(contemSubstring("javascript", "java")); // true
console.log(contemSubstring("python", "java")); // false
