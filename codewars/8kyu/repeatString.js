function repeatStr(n, s) {
    let word = '';

    for(let i = 0; i < n; i++) {
        word += s;
    }

    return word;
}

console.log(repeatStr(3, "*")); // "***"
console.log(repeatStr(5, "hello")); // "hellohellohellohellohello"
console.log(repeatStr(2, "abc")); // "abcabc"