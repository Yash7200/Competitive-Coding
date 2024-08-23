process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const countCoinsToPay = (amount) => {
    const coinsNeeded = (amount < 10)
        ? amount
        : ( (amount % 10) === 0 )
            ? 0
            : (amount % 10);
            
    console.log(coinsNeeded);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((amount) => {
        countCoinsToPay(amount);
    });
});