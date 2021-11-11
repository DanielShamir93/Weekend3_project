const busChangeOnStop = station => station[0] - station[1];
const sumBusChangeOnStops = (prevVal, currVal) => prevVal + currVal;

const peopleOnTheBus = arr => {
    return arr.map(busChangeOnStop).reduce(sumBusChangeOnStops);
}

console.log(peopleOnTheBus([[10, 3], [4, 2], [0, 2], [5, 0], [10, 8]]));   // --> 14