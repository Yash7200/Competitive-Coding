process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canTeamChefWin = (targetRuns, overs) => {
    const ballsPerOver = 6;
    const maxRunsIn1Ball = 6;
    const maxPossibleRuns = overs * ballsPerOver * maxRunsIn1Ball;
    
    (targetRuns <= maxPossibleRuns)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [targetRuns, overs] = testcase;
        canTeamChefWin(targetRuns, overs);
    });
});