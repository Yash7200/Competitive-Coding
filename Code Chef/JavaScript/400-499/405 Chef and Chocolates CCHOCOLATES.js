process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const maxChocolatesToBuy = (coinsOf5Rs, coinsOf10Rs, chocolateCost) => {
    const totalMoney = (coinsOf5Rs * 5) + (coinsOf10Rs * 10);
    const maxChocolates = parseInt(totalMoney / chocolateCost);
    
    console.log(maxChocolates);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [coinsOf5Rs, coinsOf10Rs, chocolateCost] = testcase;
        maxChocolatesToBuy(coinsOf5Rs, coinsOf10Rs, chocolateCost);
    });
});