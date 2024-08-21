process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const countLeftBoys = (totalGirls, totalBoys) => {
    const leftBoys = totalBoys - totalGirls;
    console.log(leftBoys);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [totalGirls, totalBoys] = testcase;
        countLeftBoys(totalGirls, totalBoys);
    });
});