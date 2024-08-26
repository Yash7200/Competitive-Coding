process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const whatToDoRepairOrBuyNew = (phoneRepairCost, phoneBuyCost) => {
    (phoneRepairCost === phoneBuyCost)
        ? console.log("ANY")
        : (phoneRepairCost < phoneBuyCost)
            ? console.log("REPAIR")
            : console.log("NEW PHONE");
}

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [phoneRepairCost, phoneBuyCost] = testcase;
        whatToDoRepairOrBuyNew(phoneRepairCost, phoneBuyCost);
    });
});