function differenceInAges(ages) {
    let agesRange = ages.sort((a, b) => a - b);

    return [agesRange[0], agesRange[agesRange.length - 1], (agesRange[agesRange.length - 1] - agesRange[0])]
}

console.log(differenceInAges([82, 15, 6, 38, 35]))
