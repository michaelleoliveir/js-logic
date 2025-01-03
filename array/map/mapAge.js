function age(arr) {
    return arr.map((person) => {
        return {
            name: person.name,
            age: person.age + 10
        }
    }) 
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.log(age(people))