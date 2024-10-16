let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countMinCoins = (coins) => {
    const isImpossibleToPay = (coins % 5) !== 0;
    
    const isBothCoinsNeeded = (coins % 10) !== 0;
    
    const minCoins = (isImpossibleToPay)
        ? -1
        : (isBothCoinsNeeded)
            ? (parseInt(coins / 10) + 1)
            : (coins / 10);
            
    console.log(minCoins);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((coins) => {
        countMinCoins(coins);
    });
});