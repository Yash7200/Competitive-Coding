let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canGetDesiredTemp = (initialBathtubTemp, desiredBathtubTemp, hotWaterInLtrs, coldWaterInLtrs) => {
    const maxWaterTemp = initialBathtubTemp + hotWaterInLtrs;
    const minWaterTemp = initialBathtubTemp - coldWaterInLtrs;
    
    ((desiredBathtubTemp >= minWaterTemp) && (desiredBathtubTemp <= maxWaterTemp))
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [initialBathtubTemp, desiredBathtubTemp, hotWaterInLtrs, coldWaterInLtrs] = testcase;
        canGetDesiredTemp(initialBathtubTemp, desiredBathtubTemp, hotWaterInLtrs, coldWaterInLtrs);
    });
});