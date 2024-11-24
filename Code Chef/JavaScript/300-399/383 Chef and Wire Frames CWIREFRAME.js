process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const costToBuyWire = (lengthOfWire, widthOfWire, costPerCM) => {
    const perimeterOfFrame = 2 * (lengthOfWire + widthOfWire);
    const totalCost = costPerCM * perimeterOfFrame;
    
    console.log(totalCost);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));

    testcases.forEach((testcase) => {
        const [lengthOfWire, widthOfWire, costPerCM] = testcase;
        costToBuyWire(lengthOfWire, widthOfWire, costPerCM);
    });
});
