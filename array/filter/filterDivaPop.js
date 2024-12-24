function isDivaPop(arr) {
    return arr.filter(singer => (singer.diva == true))
}

let divasPop = [
    {name: "Taylor Swift", diva: true},
    {name: "Kanye West", diva: false},
    {name: "Katy Perry", diva: true}, 
    {name: "Sabrina Carpenter", diva: true},
    {name: "Kendrick Lamar", diva: false}
]
console.log(isDivaPop(divasPop))