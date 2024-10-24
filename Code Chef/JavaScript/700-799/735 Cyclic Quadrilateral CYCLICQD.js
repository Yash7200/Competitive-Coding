let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isQuadrilateralTriangle = (angle1, angle2, angle3, angle4) => {
    const isSumEqualTo180 = ((angle1 + angle3) === 180) || ((angle2 + angle4) === 180);
    
    (isSumEqualTo180)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [angle1, angle2, angle3, angle4] = testcase;
        isQuadrilateralTriangle(angle1, angle2, angle3, angle4);
    });
});