oddIndexCapitalEvenIndexLower = val => val.toUpperCase()[0] + val.toLowerCase()[1];

const toWeirdCase = str => {
    return str.replace(/\w\w/g,  oddIndexCapitalEvenIndexLower)
}



console.log(toWeirdCase( "Weird string case" )); //=> returns "WeIrD StRiNg CaSe"