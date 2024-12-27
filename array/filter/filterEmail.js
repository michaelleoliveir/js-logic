/*
Crie um array de strings representando endereços de e-mail.
Utilize o filter() e expressões regulares para encontrar todos os e-mails de um determinado domínio (por exemplo, @gmail.com).

Adicione um filtro para encontrar e-mails que contenham um padrão específico (por exemplo, números após o arroba).
*/

function verificandoEmail(arr) {
    return arr.filter(email => {
        return email.includes("@gmail.com")
    })
}

let emailsTeste = [
    "teste@gmail.com",
    "teste@errado.com",
    "testecerto@gmail.com",
    "edwardcullen@gmail.com",
    "jacob@ruim.com"
];
console.log(verificandoEmail(emailsTeste))