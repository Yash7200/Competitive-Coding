process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const findRequiredRuns = (targetRuns, runs) => {
    const requiredRuns = targetRuns - runs;
    console.log(requiredRuns);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [targetRuns, runs] = testcase;
        findRequiredRuns(targetRuns, runs);
    });
});