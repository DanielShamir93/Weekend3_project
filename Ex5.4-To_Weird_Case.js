oddIndexCapital_EvenIndexLower = val => val.toUpperCase()[0] + val.toLowerCase()[1];

const toWeirdCase = str => {
    return str.replace(/\w\w/g, oddIndexCapital_EvenIndexLower)
}



console.log(toWeirdCase( "Weird string case" )); //=> returns "WeIrD StRiNg CaSe"