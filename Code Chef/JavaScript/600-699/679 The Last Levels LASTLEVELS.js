let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countTimeToFinshGame = (levels, minPerLevel, breakMinsAfter3Levels) => {
    const breaksCount = (levels <= 3)
        ? 0 
        : ((levels % 3) === 0)
            ? (levels / 3) - 1
            : parseInt(levels / 3);
            
    const breakTime = breakMinsAfter3Levels * breaksCount;
    const allLevelsEndingTime = levels * minPerLevel;
    
    const totalTime = allLevelsEndingTime + breakTime;
    console.log(totalTime);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [levels, minPerLevel, breakMinsAfter3Levels] = testcase;
        countTimeToFinshGame(levels, minPerLevel, breakMinsAfter3Levels);
    });
});