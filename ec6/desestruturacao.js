// na desestruturação, eu posso criar variáveis a partir dos elementos já existentes na array
// cada variável acessa um elemento da array

const array = ["banana", "maça", "laranja", "uva"]
let [ testando, outroTeste ] = array

console.log(`Testando desestruturação: ${testando} e ${outroTeste}`)