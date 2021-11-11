const convertToDecimal = (prevVal, currVal, index) => prevVal + currVal * Math.pow(2, index);

const binary = arr => {
    return arr.reverse().reduce(convertToDecimal);
}

console.log(binary([1, 1, 1, 0]));