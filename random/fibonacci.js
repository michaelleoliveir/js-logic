function fibonacci(n) {
    let proxTermo;
    let n1 = 0;
    let n2 = 1;

    for(let i = 0; i <= (n-2); i++){
        proxTermo = n1 + n2;
        console.log(proxTermo)

        n1 = n2;
        n2 = proxTermo;
    }

    return proxTermo;
}

console.log(fibonacci(6))