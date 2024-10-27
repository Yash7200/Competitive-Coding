let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.reduce((acc, item, index, array) => {
        ((index % 2) !== 0)
            ? acc.push(
                item.trim().split(' ').map(Number)
            )
            : {};
        
        return acc;
    }, []);
    
    return intArray;
};

const findMaxMarks = (correctAns) => {
    const maxMarks = Math.max(...correctAns);
    console.log(maxMarks);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((correctAns) => {
        findMaxMarks(correctAns);
    });
});