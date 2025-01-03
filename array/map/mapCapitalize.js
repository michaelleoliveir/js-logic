function capitalizeNames(arr) {
    return arr.map((name) => (name[0].toUpperCase() + name.slice(1, name.length).toLowerCase())
)}


console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));