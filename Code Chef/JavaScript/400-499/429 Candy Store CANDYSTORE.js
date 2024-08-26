process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const countProfitAfterSales = (sellingGoal, chocolatesSold) => {
    const profitOnMoreSales = (sellingGoal + ((chocolatesSold - sellingGoal) *  2));
    
    const profit = (chocolatesSold <= sellingGoal)
        ? chocolatesSold
        : profitOnMoreSales;
    
    console.log(profit);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [sellingGoal, chocolatesSold] = testcase;
        countProfitAfterSales(sellingGoal, chocolatesSold);
    });
});