const peopleOnTheBus = arr => {
    return arr.map(station => {
        return station[0] - station[1];
    }).reduce((prevVal, currVal) => {
        return prevVal + currVal;
    })
}



console.log(peopleOnTheBus([[10, 3], [4, 2], [0, 2], [5, 0], [10, 8]]));