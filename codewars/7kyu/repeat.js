function repeats(arr){
    const unicos = arr.filter(num => 
        arr.indexOf(num) === arr.lastIndexOf(num)
    );

    const soma = unicos.reduce((acc, current) => {
        return acc = acc + current
    }, 0);

    return soma
};

console.log(repeats([4,5,7,5,4,8])); // 15
console.log(repeats([9,10,19,13,19,13])); // 19