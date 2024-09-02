process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const countMaxDiscount = (billAmount) => {
    const tenPercentDiscount = billAmount * 10 / 100;
    
    (tenPercentDiscount > 100)
        ? console.log(tenPercentDiscount)
        : console.log(100);
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((billAmount) => {
        countMaxDiscount(billAmount);
    });
});