let input = '';

process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    
    const intArray = strArray.reduce((accumulator, _, index, array) => {
        if(index % 2 === 0){
            accumulator.push([
                array[index].split(' ').map(Number),
                array[index + 1].split(' ').map(Number)
            ]);
        }
        
        return accumulator;
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