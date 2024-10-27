let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canMakeFlag = (orangeStrips, whiteStrips, greenStrips) => {
    const maxStrips = Math.max(orangeStrips, whiteStrips, greenStrips);
    
    const sumOfStrips = orangeStrips + whiteStrips + greenStrips;
    const isEnoughStrips = maxStrips <= (sumOfStrips - maxStrips + 1);
    
    (isEnoughStrips)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [orangeStrips, whiteStrips, greenStrips] = testcase;
        canMakeFlag(orangeStrips, whiteStrips, greenStrips);
    });
});