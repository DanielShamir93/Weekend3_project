const sumOf2LowestNums = arr => {
    return arr.sort(compareNumbers).slice(0, 2).reduce(addNumbers);
}

const compareNumbers = (a, b) => {
    return a - b;
}

const addNumbers = (a, b) => {
    return a + b;
}


console.log(sumOf2LowestNums([19, 5, 42, 2, 77]));