let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isTournamentPossible = (teams, minMatches) => {
    (teams <= minMatches)
        ? console.log('NO')
        : console.log('YES');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [teams, minMatches] = testcase;
        isTournamentPossible(teams, minMatches);
    });
});