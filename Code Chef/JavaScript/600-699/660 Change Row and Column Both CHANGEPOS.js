let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMinMoves = (row1, col1, row2, col2) => {
    let moves = 1;
    
    (row1 === row2) ? ++moves : {};
    (col1 === col2) ? ++moves : {};
    
    console.log(moves);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [row1, col1, row2, col2] = testcase;
        countMinMoves(row1, col1, row2, col2);
    });
});