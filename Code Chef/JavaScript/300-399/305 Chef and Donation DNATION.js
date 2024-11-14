process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const findDonatingAmount = (incomeOfChef, incomeOfChefina) => {
    const donatingAmount = incomeOfChefina - incomeOfChef;
    console.log(donatingAmount);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [incomeOfChef, incomeOfChefina] = testcase;
        
        findDonatingAmount(incomeOfChef, incomeOfChefina);
    });
});