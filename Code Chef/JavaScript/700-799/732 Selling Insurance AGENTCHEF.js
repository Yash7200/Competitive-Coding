let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countPlansToSell = (insuranceCost) => {
    const commissionPerSell = (insuranceCost * 20) / 100;
    const sellsToGet100Dollars = (commissionPerSell >= 100)
        ? 1
        : Math.ceil(100 / commissionPerSell);
    
    console.log(sellsToGet100Dollars);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((insuranceCost) => {
        countPlansToSell(insuranceCost);
    });
});