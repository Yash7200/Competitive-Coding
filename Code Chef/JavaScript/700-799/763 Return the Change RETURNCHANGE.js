let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countChangeToReceive = (bill) => {
    const lastNumInBill = bill % 10;
    const updatedBill = (lastNumInBill === 0)
        ? bill
        : (lastNumInBill >= 5) && (lastNumInBill <= 9)
            ? Math.ceil(bill / 10) * 10
            : Math.floor(bill / 10) * 10;
    
    const amountToReceive = 100 - updatedBill;
    console.log(amountToReceive);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((bill) => {
        countChangeToReceive(bill);
    });
});