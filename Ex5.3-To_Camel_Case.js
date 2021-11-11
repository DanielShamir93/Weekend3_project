removeHyphenAndCapitalize = val => val.toUpperCase()[1];

function toCamelCase(str) {
    return str.replace(/[-_]./g, removeHyphenAndCapitalize);
}

console.log(toCamelCase("the_stealth_warrior"));