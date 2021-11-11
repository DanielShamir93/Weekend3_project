const compareNumbers = (a, b) =>  a - b;
const addNumbers = (a, b) => a + b;

const sumOf2LowestNums = arr => {
    return arr.sort(compareNumbers).slice(0, 2).reduce(addNumbers);
}

console.log(sumOf2LowestNums([19, 5, 42, 2, 77]));