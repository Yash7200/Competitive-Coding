let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const getTotalSetCount = (scoreOfSonu, scoreOfTitu) => {
    const winnerSets = Math.max(scoreOfSonu, scoreOfTitu);
    
    const minSets = (winnerSets  * 2) - 1;
    console.log(minSets);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [scoreOfSonu, scoreOfTitu] = testcase;
        getTotalSetCount(scoreOfSonu, scoreOfTitu);
    });
});
