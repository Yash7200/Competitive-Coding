let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const howManyBagsCanHeGet = (coinsPerBill, billsPaidCount) => {
    const totalCoins = billsPaidCount * coinsPerBill;
    const bagsCount = parseInt(totalCoins / 100);
    
    console.log(bagsCount);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [coinsPerBill, billsPaidCount] = testcase;
        howManyBagsCanHeGet(coinsPerBill, billsPaidCount);
    });
});