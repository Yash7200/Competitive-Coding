let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();

    const intArray = strArray.reduce((acc, item, index) => {
        ((index % 2) !== 0)
        ? acc.push(
            item.trim().split(' ').map(Number)
        )
        : {};
        
        return accumulator;
    },[]);
    
    return intArray;
};

const isGoodProblem = (scores) => {
    (scores.every((score) => score > 4))
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((scores) => {
        isGoodProblem(scores);
    });
});