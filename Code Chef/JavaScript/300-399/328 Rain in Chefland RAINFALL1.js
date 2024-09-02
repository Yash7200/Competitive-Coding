process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const categorizeRainfall = (rateOfRainfall) => {
    (rateOfRainfall < 3)
        ? console.log("LIGHT")
        : ((rateOfRainfall >= 3) && (rateOfRainfall < 7))
            ? console.log("MODERATE")
            : console.log("HEAVY");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((rateOfRainfall) => {
        categorizeRainfall(rateOfRainfall);
    });
});