function sufixo(arr) {
    return arr.map((pessoa) => 
        pessoa.endsWith("a")
        ? `Sra. ${pessoa}`
        : `Sr. ${pessoa}`
    )
}

const names = ["João", "Maria", "Carlos"];
console.log(sufixo(names))