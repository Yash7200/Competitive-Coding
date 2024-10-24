let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countBagsToBuy = (itemsPurchased) => {
    const minBags = parseInt(itemsPurchased / 10);
    
    const bagsToBuy = ((itemsPurchased % 10) === 0)
        ? minBags : (minBags + 1);
    console.log(bagsToBuy);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((itemsPurchased) => {
        countBagsToBuy(itemsPurchased);
    });
});