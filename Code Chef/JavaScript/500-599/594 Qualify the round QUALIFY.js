let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isQualified = (targetScore, easyProblems, hardProblems) => {
    const totalScore = (easyProblems * 1) + (hardProblems * 2);
    
    (totalScore >= targetScore)
        ? console.log('Qualify')
        : console.log('NotQualify');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [targetScore, easyProblems, hardProblems] = testcase;
        isQualified(targetScore, easyProblems, hardProblems);
    });
});