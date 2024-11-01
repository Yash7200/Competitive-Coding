let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findMinDelay = (actualDeadline, timesDelayed, extraTime) => {
    const duration1 = actualDeadline * timesDelayed;
    const duration2 = actualDeadline + extraTime;
    
    const minDelay = Math.min(duration1, duration2);
    console.log(minDelay);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [actualDeadline, timesDelayed, extraTime] = testcase;
        findMinDelay(actualDeadline, timesDelayed, extraTime);
    });
});
