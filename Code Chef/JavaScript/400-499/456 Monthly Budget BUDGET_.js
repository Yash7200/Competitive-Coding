process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const canSpendMoneyTill30Days = (budget, expensePerDay) => {
    const expenseOf30Days = expensePerDay * 30;
    
    (expenseOf30Days <= budget)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [budget, expensePerDay] = testcase;
        canSpendMoneyTill30Days(budget, expensePerDay);
    });
});