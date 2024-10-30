let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMinDraws = (teamAscore, teamBscore) => {
    const drawMatches = teamAscore % 3;
    console.log(drawMatches);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [teamAscore, teamBscore] = testcase;
        countMinDraws(teamAscore, teamBscore);
    });
});