let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const doesPizzaCanBeDivided = (pieces) => {
    ((pieces % 2 === 0) || pieces === 1)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((pieces) => {
        doesPizzaCanBeDivided(pieces);
    });
});