let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray =  strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const makeValidArthmeticProgrssion = (num1, num2, num3) => {
    const leftSide = num2 - num1;
    const rightSide = num3 - num2;
    
    const minStepsToValidate = (leftSide === rightSide) ? 0 : 1;
    console.log(minStepsToValidate);    
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [num1, num2, num3] = testcase;
        makeValidArthmeticProgrssion(num1, num2, num3);
    });
});