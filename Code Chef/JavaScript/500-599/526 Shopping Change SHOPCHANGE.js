let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const howMuchMoneyWillGetBack = (paidAmount) => {
    const moneyToGetBack = 100 - paidAmount;
    console.log(moneyToGetBack);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((paidAmount) => {
        howMuchMoneyWillGetBack(paidAmount);
    });
});