process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const countGamesToBePlayed = (freeTime) => {
    const gamesToBePlayed = (freeTime * 60) / 20;
    console.log(gamesToBePlayed);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((freeTime) => {
        countGamesToBePlayed(freeTime);
    });
});