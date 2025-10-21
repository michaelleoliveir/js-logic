function _if(bool, func1, func2) {
    if(bool) {
        return func1()
    }
    return func2()
}

console.log(_if(true, "It's true!", "It's false!"))
console.log(_if(false, "It's true!", "It's false!"))