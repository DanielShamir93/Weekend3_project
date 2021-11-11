const binary = arr => {
    return arr.reverse().reduce((prevVal, currVal, index) => {
        return prevVal + currVal * Math.pow(2, index);
    })
}

console.log(binary([1, 1, 1, 0]));