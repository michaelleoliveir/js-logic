function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return (parseInt(laLigaGoals) + parseInt(copaDelReyGoals) + parseInt(championsLeagueGoals))
}

console.log(goals(43, 10, 5)) // 58
console.log(goals(5, 10, 2)) // 17
console.log(goals(0, 0, 0)) // 0