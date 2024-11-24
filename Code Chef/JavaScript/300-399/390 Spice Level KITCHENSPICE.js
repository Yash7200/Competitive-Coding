process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map(Number);
    return intArray;
};

const categorizeBySpiceLevel = (spiceLevel) => {
    (spiceLevel < 4)
        ? console.log("MILD")
        : ((spiceLevel >= 4) && (spiceLevel < 7))
            ? console.log("MEDIUM")
            : console.log("HOT");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((spiceLevel) => {
        categorizeBySpiceLevel(spiceLevel);
    });
});
