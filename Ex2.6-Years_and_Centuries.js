
const centuryFromYear = year => {
    const preYear = parseInt(year.toString().slice(0, 2));
    const sufYear = parseInt(year.toString().slice(2, 4));
    
    if (sufYear > 0) {
        return preYear + 1;
    } else {
        return preYear;
    }
}



console.log(centuryFromYear(1705));  // returns (18)
console.log(centuryFromYear(1900));  // returns (19)
console.log(centuryFromYear(1601));  // returns (17)
console.log(centuryFromYear(2000));  // returns (20)