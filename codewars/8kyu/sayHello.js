function sayHello( name, city, state ) {
    let fullName = name.join(' ');
    return `Hello, ${fullName}! Welcome to ${city}, ${state}`
}

console.log(sayHello(['John', ' ', 'Doe'], 'New York', 'NY')); // "Hello, John Doe! Welcome to New York, NY"
console.log(sayHello(['Jane', ' ', 'Smith'], 'Los Angeles', 'CA ')); // "Hello, Jane Smith! Welcome to Los Angeles, CA"

