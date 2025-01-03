function objectToString(arr) {
    return arr.map((person) => {
        return `Name: ${person.name}, Age: ${person.age}`
    })
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
console.log(objectToString(people))