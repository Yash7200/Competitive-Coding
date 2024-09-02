process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const whoTakesNumberHome = (number) => {
    ((number % 2 === 0) && (number % 7 === 0))
        ? console.log("Alice")
        : ((number % 2 !== 0) && (number % 9 === 0))
            ? console.log("Bob")
            : console.log("Charlie");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((number) => {
        whoTakesNumberHome(number);
    });
});