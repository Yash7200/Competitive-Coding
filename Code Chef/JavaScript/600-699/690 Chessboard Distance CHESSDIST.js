let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findMaxDistance = (x1,y1,x2,y2) => {
    const xAxisDistance = Math.abs(x1 - x2);
    const yAxisDistance = Math.abs(y1 - y2);
    
    const maxDistance = Math.max(xAxisDistance, yAxisDistance);
    console.log(maxDistance);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [x1,y1,x2,y2] = testcase;
        findMaxDistance(x1,y1,x2,y2);
    });
});