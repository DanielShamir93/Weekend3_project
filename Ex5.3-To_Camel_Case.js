function toCamelCase(str) {
    return str.replace(/[-_]./g, val => {
        return val.toUpperCase()[1];
    })
}

console.log(toCamelCase("the_stealth_warrior")); 