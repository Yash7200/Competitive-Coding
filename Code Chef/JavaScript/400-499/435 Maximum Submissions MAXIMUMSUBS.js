process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const countTotalSubmissions = (minutes) => {
    const timeToSubmit1Problem = 30;
    const totalTimeInSeconds = minutes * 60;
    
    const totalSubmissions = parseInt(totalTimeInSeconds / timeToSubmit1Problem);
    console.log(totalSubmissions);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((minutes) => {
        countTotalSubmissions(minutes);
    });
});