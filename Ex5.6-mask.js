const maskify = str => {
    const len = str.length;
    return  len >= 0 && len <= 4 ? 
            str : 
            Array.from(str).fill('#', 0, str.length-4).join('');
}


console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("12345"));
console.log(maskify("1234"));
console.log(maskify("123"));
console.log(maskify("12"));
console.log(maskify("1"));
console.log(maskify(""));



