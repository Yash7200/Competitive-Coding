let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.reduce((acc, item, index) => {
        ((index % 2) !== 0)
            ? acc.push( item.trim().split(' ').map(Number) )
            : {};
            
        return acc;
    }, []);

    return intArray;
};

const countBoxNeeded = (ballsCount) => {
    const boxNeeded = Math.max(...ballsCount);
    console.log(boxNeeded);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((ballsCount) => {
        countBoxNeeded(ballsCount);
    });
});