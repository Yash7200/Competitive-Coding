let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const checkMarioSize = (mushrooms) => {
    const isNormal = (mushrooms % 3) === 0;
    const isHuge = (mushrooms % 3) === 1;
    
    (isNormal)
        ? console.log('NORMAL')
        : (isHuge)
            ? console.log('HUGE')
            : console.log('SMALL');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((mushrooms) => {
        checkMarioSize(mushrooms);
    });
});