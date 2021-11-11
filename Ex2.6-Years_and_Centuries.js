const centuryFromYear = year => {
    const preYear = parseInt(year.toString().slice(0, 2));
    const sufYear = parseInt(year.toString().slice(2, 4));
    
    return sufYear > 0 ? preYear + 1 : preYear;
}



console.log(centuryFromYear(1705));  // returns (18)
console.log(centuryFromYear(1900));  // returns (19)
console.log(centuryFromYear(1601));  // returns (17)
console.log(centuryFromYear(2000));  // returns (20)