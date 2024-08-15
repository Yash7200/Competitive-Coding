process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const findBestScore = (firstAttempt, secondAttempt) => {
    const bestScore = Math.max(firstAttempt, secondAttempt);
    console.log(bestScore);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [firstAttempt, secondAttempt] = testcase;
        findBestScore(firstAttempt, secondAttempt);
    });
});