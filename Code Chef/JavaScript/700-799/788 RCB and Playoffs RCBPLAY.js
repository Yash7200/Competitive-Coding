let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canRCBqualify = (rcbScore, minScore, gamesPending) => {
    const maxPossibleScore = rcbScore + (gamesPending * 2);
    
    (maxPossibleScore >= minScore)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [rcbScore, minScore, gamesPending] = testcase;
        canRCBqualify(rcbScore, minScore, gamesPending);
    });
});