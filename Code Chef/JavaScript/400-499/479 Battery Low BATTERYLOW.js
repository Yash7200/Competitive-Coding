process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const isBatteryLow = (batteryPercentage) => {
    (batteryPercentage < 16)
        ? console.log("Yes")
        : console.log("No");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((batteryPercentage) => {
        isBatteryLow(batteryPercentage);
    });
});