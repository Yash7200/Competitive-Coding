process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isAvgGreaterThan3rd = (num1, num2, num3) => {
    const avg = (num1 + num2) / 2;
    
    (avg > num3)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [num1, num2, num3] = testcase;
        isAvgGreaterThan3rd(num1, num2, num3);
    });
});