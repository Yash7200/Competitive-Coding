let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const checkBirdType = (chickenLegs, duckLegs, totalLegs) => {
    const isChicken = (totalLegs % chickenLegs) === 0;
    const isDuck = (totalLegs % duckLegs) === 0;
    
    (isChicken && isDuck)
        ? console.log('ANY')
        : (!isChicken && !isDuck)
            ? console.log('NONE')
            : (isChicken && !isDuck)
                ? console.log('CHICKEN')
                : console.log('DUCK');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [chickenLegs, duckLegs, totalLegs] = testcase;
        checkBirdType(chickenLegs, duckLegs, totalLegs);
    });
});