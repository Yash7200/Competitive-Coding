let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const moveStonesAndSetDiff = (stonesInBox1, stonesInBox2, diff) => {
    const stonesDiff = Math.abs(stonesInBox1 - stonesInBox2);
    
    const secondOrderDiff = Math.abs(diff - stonesDiff);
    const isOdd2ndOrderDiff = (secondOrderDiff % 2) !== 0;
    
    const stepsToReachDiff = secondOrderDiff / 2;
    (isOdd2ndOrderDiff) 
        ? console.log(-1)
        : console.log(stepsToReachDiff)
    ;
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [stonesInBox1, stonesInBox2, diff] = testcase;
        moveStonesAndSetDiff(stonesInBox1, stonesInBox2, diff);
    });
});
