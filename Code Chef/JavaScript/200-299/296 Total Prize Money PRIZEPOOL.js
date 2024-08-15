process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
}

const countNeededPrizeMoney = (top10, top11to100) => {
    const neededPrizeMoney = (top10 * 10) + (top11to100 * 90);
    console.log(neededPrizeMoney);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [top10, top11to100] = testcase;
        countNeededPrizeMoney(top10, top11to100);
    });
});