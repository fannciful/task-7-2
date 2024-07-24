function curryMultiply(a) {
    return function (b) {
        return a * b;
    }
}

console.log(curryMultiply(5)(2))


