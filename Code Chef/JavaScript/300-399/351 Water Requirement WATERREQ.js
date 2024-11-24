process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map(Number);
    return intArray;
};

const countRequiredWater = (hours) => {
    const requiredHours = hours * 2;
    console.log(requiredHours);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((requiredHours) => {
        countRequiredWater(requiredHours);
    });
});