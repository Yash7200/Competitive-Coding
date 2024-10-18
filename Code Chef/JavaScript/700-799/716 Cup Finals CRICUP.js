let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isMatchInteresting = (team1skillLevel, team2skillLevel, maxDifference) => {
    const skillDifference = Math.abs(team1skillLevel - team2skillLevel);
    
    (skillDifference <= maxDifference)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [team1skillLevel, team2skillLevel, maxDifference] = testcase;
        isMatchInteresting(team1skillLevel, team2skillLevel, maxDifference);
    });
});