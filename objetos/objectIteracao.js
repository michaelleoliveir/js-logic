let cesta = {
    banana: 5,
    maca: 10,
    laranja: 7
}

for(produtos in cesta) {
    console.log(produtos, cesta[produtos])
}

Object.keys(cesta).forEach((produto) => {
    console.log(produto, cesta[produto])
})