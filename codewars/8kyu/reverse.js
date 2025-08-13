function pigIt(str) {
    return str
        // divide as palavras da frase
        .split(' ')
        .map((word) => {
            // verifica se contém somente letras
            if (/^[A-Za-z]+$/.test(word)) {
                return word.slice(1) + word[0] + 'ay';
            }
            return word;
        })
        .join(' ')
}

console.log(pigIt("Pig latin is cool"));