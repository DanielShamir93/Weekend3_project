function findUniq(arr) {
    arr.sort();
    return (arr[0] === arr[1]) ? arr[arr.length-1] : arr[0];
}


console.log(findUniq([ 1, 1, 1, 0.55, 1, 1 ]));
