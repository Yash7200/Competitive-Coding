let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canMeasureWeight = (objWeight, weightUnit1, weightUnit2, weightUnit3) => {
    const isMeasuringPossible = (objWeight === weightUnit1) ||
        (objWeight === weightUnit2) ||
        (objWeight === weightUnit3) ||
        (objWeight === (weightUnit1 + weightUnit2)) || 
        (objWeight === (weightUnit1 + weightUnit3)) ||
        (objWeight === (weightUnit2 + weightUnit3)) ||
        (objWeight === weightUnit1 + weightUnit2 + weightUnit3);
        
    (isMeasuringPossible)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [objWeight, weightUnit1, weightUnit2, weightUnit3] = testcase;
        canMeasureWeight(objWeight, weightUnit1, weightUnit2, weightUnit3);
    });
});