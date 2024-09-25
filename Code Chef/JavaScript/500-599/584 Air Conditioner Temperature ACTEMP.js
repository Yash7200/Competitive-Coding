let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canAllAgree = (minTempForAlice, maxTempForBob, minTempForCharlie) => {
    const minTempForAll = Math.max(minTempForAlice, minTempForCharlie);
    
    (minTempForAll > maxTempForBob)
        ? console.log('No')
        : console.log('Yes');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [minTempForAlice, maxTempForBob, minTempForCharlie] = testcase;
        canAllAgree(minTempForAlice, maxTempForBob, minTempForCharlie);
    });
});