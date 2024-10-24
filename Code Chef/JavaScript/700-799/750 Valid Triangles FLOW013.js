let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isValidTriangle = (angles) => {
    const sumOfAngles = angles.reduce((acc, item) => acc + item, 0);
    
    (sumOfAngles === 180)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((angles) => {
        isValidTriangle(angles);
    });
});