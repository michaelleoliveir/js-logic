function periodIsLate(last, today, cycleLength) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((last - today) / oneDay));

    return diffDays > cycleLength;
}