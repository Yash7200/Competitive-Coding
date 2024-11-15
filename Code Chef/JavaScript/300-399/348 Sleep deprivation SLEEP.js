process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map(Number);
    return intArray;
};

const isSleepDeprived = (hoursSlept) => {
    (hoursSlept < 7)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((hoursSlept) => {
        isSleepDeprived(hoursSlept);
    });
});