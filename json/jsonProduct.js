const URL = 'https://dummyjson.com/products'

async function acessarProdutos() {
    try {
        const resposta = await fetch(URL);
        
        if(resposta.status === 200) {
            const objeto = await resposta.json();
            
            objeto.products.forEach(element => {
                console.log(`Produto: ${element.title} na categoria ${element.category}`)
            });
        } else {
            console.log(`Erro ${resposta.status} - ${resposta.statusText}`)
        }
    } catch(erro) {
        console.log("Ocorreu o erro: ", erro.message)
    }
}

acessarProdutos();