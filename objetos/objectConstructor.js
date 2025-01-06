function Person(name, age, genre) {
    this.name = name;
    this.age = age;
    this.genre = genre
}

let pessoa = new Person("Michaelle", 21, "Feminino")
console.log(pessoa)

let transformandoString = JSON.stringify(pessoa)
console.log(transformandoString)