// a função transforma a string em lower case para que, mesmo se a palavra estiver com letras maiúsculas, sua totalidade ser incluída na verificação

function countVowels(str) {
    let vogais = 0;
    let vowels = "aeiou"

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            vogais++
        }
    }

    return vogais
}

console.log(countVowels("Testando o input"))