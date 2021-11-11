const shortestWords = str => {
    return str.split(' ').reduce((prevVal, currVal) => {
        return prevVal.length > currVal.length ? prevVal : currVal;
    }).length;
}


console.log(shortestWords('I shot the sheriff but I did not shoot the deputy'));  // --> 7