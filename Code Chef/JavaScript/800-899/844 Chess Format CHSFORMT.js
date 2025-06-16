let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const classifyChessFormat = (num1, num2) => {
    const sum = num1 + num2;
    
    const isBulletFormat = sum < 3;
    const isBlitzFormat = sum <= 10;
    const isRapidFormat = sum <= 60;
    
    const format = (isBulletFormat) ? 1
        : (isBlitzFormat) ? 2
        : (isRapidFormat) ? 3
        : 4
    ;
    console.log(format)
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [num1, num2] = testcase;
        classifyChessFormat(num1, num2);
    });
});
