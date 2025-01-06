let cars = [
    { make: "Toyota", model: "Corolla", year: 2021 },
    { make: "Honda", model: "Civic", year: 2020 },
    { make: "Ford", model: "Focus", year: 2022 }
];

cars.forEach((car) => {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`)
})