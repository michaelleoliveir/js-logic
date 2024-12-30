var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce((total, votador) => {
        if(votador.age >= 18 && votador.age <= 25) {
            total.numYoungPeople++;
            if(votador.voted) total.numYoungVotes++
        } else if (votador.age >= 26 && votador.age <= 35) {
            total.numMidPeople++;
            if(votador.voted) total.numMidVotes++
        } else if (votador.age >= 36 && votador.age <= 55) {
            total.numOldPeople++;
            if(votador.voted) total.numOldVotes++
        }

        return total
    }, {
        numYoungPeople: 0,
        numYoungVotes: 0,
        numMidPeople: 0,
        numMidVotes: 0,
        numOldPeople: 0,
        numOldVotes: 0
})
}

console.log(voterResults(voters));