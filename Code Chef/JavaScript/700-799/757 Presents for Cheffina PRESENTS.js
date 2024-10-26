let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countAmountToPay = (giftCount) => {
    const freeGiftsCount = parseInt(giftCount / 5);
    const amountToPay = giftCount - freeGiftsCount;
    
    console.log(amountToPay);
};


process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((giftCount) => {
        countAmountToPay(giftCount);
    });
});