const trimmingString = str => {
    return str.slice(1, str.length-1);
}

const trimmingString2 = str => {
    return str.replace(/\w(.*)\w/, '$1');
}

console.log(trimmingString('12345'));