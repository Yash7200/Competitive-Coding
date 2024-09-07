let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMinimumWrongAns = (marksOfChef) => {
    const minimumWrongAns = (marksOfChef === 0 || (marksOfChef % 3) === 0)
        ? 0
        : (3 - parseInt(marksOfChef % 3));
    console.log(minimumWrongAns);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((marksOfChef) => {
        countMinimumWrongAns(marksOfChef);
    });
});