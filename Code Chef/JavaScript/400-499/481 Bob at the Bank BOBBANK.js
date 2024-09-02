process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const countFinalBalance = (balance, deposit, bankCharges, months) => {
    const totalDeposit = deposit * months;
    const totalCharges = bankCharges * months;
    
    const finalBalance = balance + totalDeposit - totalCharges;
    console.log(finalBalance);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [balance, deposit, bankCharges, months] = testcase;
        countFinalBalance(balance, deposit, bankCharges, months);
    });
});