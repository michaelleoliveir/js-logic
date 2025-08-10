function digitalRoot(n) {
    if (n.toString().length >= 2) {
        let sum = n.toString().split('').reduce((acumulador, valorAtual) => parseInt(acumulador) + parseInt(valorAtual), 0);
        return digitalRoot(sum);
    }
    return n;
}

console.log(digitalRoot(15)); 