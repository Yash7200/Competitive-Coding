let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countGamesToWin = (currentScore, targetScore) => {
    const scoreDiff = targetScore - currentScore;
    const gamesToWin = (scoreDiff === 0)
        ? 0
        : ((scoreDiff % 8) === 0)
            ? (scoreDiff / 8)
            : (parseInt(scoreDiff / 8) + 1);
            
    console.log(gamesToWin);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [currentScore, targetScore] = testcase;
        countGamesToWin(currentScore, targetScore);
    });
});