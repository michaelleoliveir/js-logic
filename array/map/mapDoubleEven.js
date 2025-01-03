function doubleEven(arr) {
    return arr.map((number) => 
        number % 2 === 0
        ? number * 2
        : number
    )
}  

const numbers = [1, 2, 3, 4, 5, 6];
console.log(doubleEven(numbers))