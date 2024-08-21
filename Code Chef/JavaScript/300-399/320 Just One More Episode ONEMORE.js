process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const canWatchShow = (timeToStartExam) => {
    (timeToStartExam > 24)
        ? console.log("Yes")
        : console.log("No");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((timeToStartExam) => {
        canWatchShow(timeToStartExam);
    });
});