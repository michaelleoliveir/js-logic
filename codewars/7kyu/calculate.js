function calculate(string) {
    let divide = string.split(" ");
    let num1 = Number(divide[2]);
    let num2 = Number(divide[6]);

    if(divide[5] === 'loses') {
        return num1 - num2
    }

    return num1 + num2
};

console.log(calculate("Panda has 48 apples and loses 4"))   