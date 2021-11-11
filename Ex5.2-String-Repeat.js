const repeatStr = (count, str) => {
    return str.padEnd(str.length * count, str);
}


console.log(repeatStr(6, "I")); // "IIIIII"
console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"