let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const canGift7days = (budget) => {
    let totalGiftCost = 0;
    let giftCount = 1;
    let lastGiftCost = 1;
    
    while(giftCount < 8){
        
        totalGiftCost += lastGiftCost;
        lastGiftCost = (lastGiftCost * 2);
        ++giftCount;
    }
    
    
    (budget >= totalGiftCost)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((budget) => {
        canGift7days(budget);
    });
});