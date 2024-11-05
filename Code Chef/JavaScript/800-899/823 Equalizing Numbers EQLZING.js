let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canEqualizeNums = (num1, num2) => {
    const diff = Math.abs(num1 - num2);
    
    ((diff % 2) === 0)
        ? console.log('Yes')
        : console.log('No');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [num1, num2] = testcase;
        canEqualizeNums(num1, num2);
    });
});
