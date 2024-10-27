let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    
    const intArray = strArray.reduce((acc, item, index) => {
        (index % 2 === 0)
            ? acc.push([
                item.trim().split(' ').map(Number),
                item.trim().split(' ').map(Number)
            ])
            : {};
        
        return acc;
    }, []);
    
    return intArray;
};

const isDesiredScorePossible = (currentScore, desiredScore) => {
    const [currentTeamAscore, currentTeamBscore] = currentScore;
    const [desiredTeamAscore, desiredTeamBscore] = desiredScore;
    
    (desiredTeamAscore < currentTeamAscore || desiredTeamBscore < currentTeamBscore)
        ? console.log('IMPOSSIBLE')
        : console.log('POSSIBLE');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [currentScore, desiredScore] = testcase;
        isDesiredScorePossible(currentScore, desiredScore);
    });
});