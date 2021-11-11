const tribonacci = (arr, n) => {
    for (let i = 2; i < n - 1 ; i++) {
        arr.push(arr[i] + arr[i - 1] + arr[i - 2])
    }
    return arr;
}




console.log(tribonacci([1, 1, 1], 8));