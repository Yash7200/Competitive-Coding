process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isOddSumPair = (num1, num2, num3) => {
    ( ((num1 + num2) % 2 !== 0) ||
      ((num2 + num3) % 2 !== 0) ||
      ((num1 + num3) % 2 !== 0))
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [num1, num2, num3] = testcase;
        isOddSumPair(num1, num2, num3);
    });
});