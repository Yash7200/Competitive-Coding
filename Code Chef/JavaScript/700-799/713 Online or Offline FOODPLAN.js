let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const whereToOrder = (onlinePrice, dineInPrice) => {
    const onlinePriceAfterDiscount = onlinePrice - ((onlinePrice * 10) / 100);
    
    (onlinePriceAfterDiscount === dineInPrice)
        ? console.log('EITHER')
        : (onlinePriceAfterDiscount < dineInPrice)
            ? console.log('ONLINE')
            : console.log('DINING');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [onlinePrice, dineInPrice] = testcase;
        whereToOrder(onlinePrice, dineInPrice);
    });
});