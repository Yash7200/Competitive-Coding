process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const countRebatingAmount = (rebatableAmount, repairCost) => {
    const rebatingAmount = Math.min(rebatableAmount, repairCost);
    console.log(rebatingAmount);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [rebatableAmount, repairCost] = testcase;
        countRebatingAmount(rebatableAmount, repairCost);
    });
});