const findNextSquare = num => {
    let sqrt = Math.sqrt(num);
    return Math.round(sqrt) === sqrt ? Math.pow(sqrt + 1, 2) : -1; 
}


console.log(findNextSquare(121)) // --> returns 144
console.log(findNextSquare(625)) // --> returns 676
console.log(findNextSquare(114)) // --> returns -1 since 114 is not a perfect
