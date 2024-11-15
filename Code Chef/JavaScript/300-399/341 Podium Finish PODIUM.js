process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const findTimeGap = (durationOfChef, durationOfWinner) => {
    const timeGap = durationOfChef + durationOfWinner;
    console.log(timeGap);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [durationOfChef, durationOfWinner] = testcase;
        findTimeGap(durationOfChef, durationOfWinner);
    });
});