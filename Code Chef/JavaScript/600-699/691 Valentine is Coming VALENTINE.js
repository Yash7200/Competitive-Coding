let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countPurchasedChocolates = (budget, priceOf1Chocolate) => {
    const maxChocolates = (budget < priceOf1Chocolate)
        ? 0
        : parseInt(budget / priceOf1Chocolate);

    console.log(maxChocolates);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [budget, priceOf1Chocolate] = testcase;
        countPurchasedChocolates(budget, priceOf1Chocolate);
    });
});