function countWords(str) {
    str = str.trim();
    if (str === '') return 0;

    let words = str.match(/[\p{L}\p{N}]+(?:['`-][\p{L}\p{N}]+)*/gu);

    return words ? words.length : 0;
}

console.log(countWords("")); // 2
console.log(countWords("This is a test.")); // 4
console.log(countWords("Count the number of words in this sentence.")); // 8