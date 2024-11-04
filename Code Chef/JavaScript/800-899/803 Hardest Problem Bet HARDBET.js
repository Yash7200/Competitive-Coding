let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const whoWinsBet = (prblm1AnsCount, prblm2AnsCount, prblm3AnsCount) => {
    const hardestPrblm = Math.min(prblm1AnsCount, prblm2AnsCount, prblm3AnsCount);
    
    const winnerOrDraw = (hardestPrblm === prblm1AnsCount)
        ? 'Draw'
        : (hardestPrblm === prblm2AnsCount)
            ? 'Bob' : 'Alice';
    console.log(winnerOrDraw);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [prblm1AnsCount, prblm2AnsCount, prblm3AnsCount] = testcase;
        whoWinsBet(prblm1AnsCount, prblm2AnsCount, prblm3AnsCount);
    });
});
