function verificaCaractere(palavra, caractere) {
    return palavra.includes(caractere)
}

console.log(verificaCaractere("javascript", "a")); // true
console.log(verificaCaractere("python", "z")); // false
