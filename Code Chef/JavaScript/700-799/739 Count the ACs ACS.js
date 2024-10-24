let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countProblemsSolved = (score) => {
    const pendingProblems = score % 100;
    const problemsWith100score = parseInt(score / 100);
    
    const totalProblems = problemsWith100score + pendingProblems;
    
    const isInvalidScore = ( totalProblems > 10 ) || ( score > 1000 );
    
    const problemsSolved = (isInvalidScore)
        ? -1 : totalProblems;
    
    console.log(problemsSolved);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((score) => {
        countProblemsSolved(score);
    });
});