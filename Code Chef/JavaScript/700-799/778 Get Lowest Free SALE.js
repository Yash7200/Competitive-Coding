let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countAmountToPay = (itemPrices) => {
    const sumOfPrices = itemPrices.reduce((acc, itemPrice) => acc + itemPrice, 0);
    const discount = Math.min(...itemPrices);
    
    const totalAfterDiscount = sumOfPrices - discount;
    console.log(totalAfterDiscount);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((itemPrices) => {
        countAmountToPay(itemPrices);
    });
});
