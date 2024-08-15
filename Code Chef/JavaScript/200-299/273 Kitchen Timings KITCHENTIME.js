process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
}

const workTimeCalculator = (startTime, endTime) => {
    const totalTimeWorked = endTime - startTime;
    console.log(totalTimeWorked);
}

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [startTime, endTime] = testcase;
        workTimeCalculator(startTime, endTime);
    });
});