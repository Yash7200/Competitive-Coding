let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const whoWillWin = (num, moves) => {
    const maxScore = num + moves;
    const isEven = (maxScore % 2) === 0;
    
    const winner = (isEven) ? 'Janmansh' : 'Jay';
    console.log(winner);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [num, moves] = testcase;
        whoWillWin(num, moves);
    });
});