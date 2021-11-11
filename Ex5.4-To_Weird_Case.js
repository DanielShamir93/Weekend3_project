const toWeirdCase = str => {
    return str.replace(/../g, val => {
        return val.toUpperCase()[0] + val.toLowerCase()[1];
    })
}



console.log(toWeirdCase( "Weird string case" )); //=> returns "WeIrD StRiNg CaSe"