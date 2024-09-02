process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const costToGiftChocolates = (giftingChocolates, ownedChocolates, costPerChocolate) => {
    const giftCost = (ownedChocolates >= giftingChocolates)
        ? 0
        : Math.abs(giftingChocolates - ownedChocolates) * costPerChocolate;
        
    console.log(giftCost);
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [giftingChocolates, ownedChocolates, costPerChocolate] = testcase;
        costToGiftChocolates(giftingChocolates, ownedChocolates, costPerChocolate);
    })
});