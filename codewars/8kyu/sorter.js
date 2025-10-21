function sorter(textbooks) {
    return textbooks.sort((a, b) => {
        return a[0].toLowerCase().charCodeAt(0) - b[0].toLowerCase().charCodeAt(0)
    })
};

console.log(sorter(['HKQtrWky','fdTycSCGJg','Zzr','xLhn','ZyUbpOVQn','fANhbNjEfB']))