let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isWaterFillingTime = (bottle1, bottle2, bottle3) => {
    let emptyBottleCount = 0;
    
    (bottle1 === 0) ? ++emptyBottleCount : {};
    (bottle2 === 0) ? ++emptyBottleCount : {};
    (bottle3 === 0) ? ++emptyBottleCount : {};
    
    (emptyBottleCount >= 2)
        ? console.log('Water filling time')
        : console.log('Not now');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [bottle1, bottle2, bottle3] = testcase;
        isWaterFillingTime(bottle1, bottle2, bottle3);
    });
});