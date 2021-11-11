getLongestWords = (prevVal, currVal) => prevVal.length > currVal.length ? prevVal : currVal;

const LongestWords = str => {
    return str.split(' ').reduce(getLongestWords).length;
}


console.log(LongestWords('I shot the sheriff but I did not shoot the deputy'));  // --> 7