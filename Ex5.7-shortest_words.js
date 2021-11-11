getShortestWords = (prevVal, currVal) => prevVal.length < currVal.length ? prevVal : currVal;

const shortestWords = str => {
    return str.split(' ').reduce(getShortestWords).length;
}


console.log(shortestWords('I shot the sheriff, but I did not shoot the deputy'));