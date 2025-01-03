function createId(arr) {
    return arr.map((person, index) => {
        return {
            name: person.name,
            id: index+1,
        }
    })
}

const people = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" }
];
console.log(createId(people))