process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const determineWeather = (temperature) => {
    (temperature > 20)
        ? console.log("HOT")
        : console.log("COLD");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((temperature) => {
        determineWeather(temperature);
    });
});