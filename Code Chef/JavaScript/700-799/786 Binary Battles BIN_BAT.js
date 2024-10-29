let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countTotalTime = (teamsCount, roundFinishTime, breakLength) => {
    const totalRounds = Math.log2(teamsCount);
    
    const totalTimeOfRounds = totalRounds * roundFinishTime;
    const totalBreakTime = breakLength * (totalRounds - 1);
    
    const totalTime = totalTimeOfRounds + totalBreakTime;
    console.log(totalTime);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [teamsCount, roundFinishTime, breakLength] = testcase;
        countTotalTime(teamsCount, roundFinishTime, breakLength);
    });
});