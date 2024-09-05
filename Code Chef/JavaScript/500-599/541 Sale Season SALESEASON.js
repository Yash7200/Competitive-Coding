let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const getDiscountedBill = (billAmount) => {
    const discountOnBill = (billAmount <= 100)
        ? 0
        : ((billAmount > 100) && (billAmount <= 1000))
            ? 25
            : ((billAmount > 1000) && (billAmount <= 5000))
                ? 100
                : 500;
    
    const discountedBill = billAmount - discountOnBill;
    console.log(discountedBill);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((billAmount) => {
        getDiscountedBill(billAmount);
    });
});