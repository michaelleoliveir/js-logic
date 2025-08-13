// String.prototype.toAlternatingCase = function () {
//     let words = this.split('');
//     let alterningWords = [];
    
//     for(let i = 0; i < words.length; i++) {
//         if(/[A-Z]/.test(words[i])) {
//             alterningWords.push(words[i].toLowerCase());
//         } else if(/[a-z]/.test(words[i])){
//             alterningWords.push(words[i].toUpperCase());
//         } else {
//             alterningWords.push(words[i]);
//         }
//     }

//     return alterningWords.join('');
// }

String.prototype.toAlternatingCase = function () {
    return this
        .split('')
        .map((word) => {
            return /[A-Z]/.test(word) ? word.toLowerCase() :
            /[a-z]/.test(word) ? word.toUpperCase() :
            word
        })
        .join('');
}

console.log('testando'.toAlternatingCase());
console.log('HeLLo WoRLD'.toAlternatingCase());