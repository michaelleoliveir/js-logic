function position(letter) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letters = alphabet.split("");

    let response = letters.indexOf(letter)

    return `Position of alphabet: ${response+1}`;
}

console.log(position('b'))