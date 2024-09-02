process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const findProfitOrLoss = (buyingPrice, sellingPrice) => {
    (sellingPrice === buyingPrice)
        ? console.log("NEUTRAL")
        : (sellingPrice > buyingPrice)
            ? console.log("PROFIT")
            : console.log("LOSS");
}

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((deal) => {
        const [buyingPrice, sellingPrice] = deal;
        findProfitOrLoss(buyingPrice, sellingPrice);
    });
});