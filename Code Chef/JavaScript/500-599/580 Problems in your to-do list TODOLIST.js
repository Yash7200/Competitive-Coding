let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    strArray = strArray.filter((strItem) => strItem.includes(' '));
    
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    return intArray;
};

const countRemovableProblems = (problemsList) => {
    let removableProblems = 0;
    
    problemsList.forEach((problemDifficulty) => {
        (problemDifficulty >= 1000)
            ? ++removableProblems
            : {};
    });
    
    console.log(removableProblems);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((problemsList) => {
        countRemovableProblems(problemsList);
    });
});