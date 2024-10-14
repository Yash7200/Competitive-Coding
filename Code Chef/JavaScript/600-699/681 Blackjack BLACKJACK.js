let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray =  strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const find3rdNumToWin = (num1, num2) => {
    const thirdNum = 21 - num1 - num2;
    (thirdNum > 10)
        ? console.log(-1)
        : console.log(thirdNum);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [num1, num2] = testcase;
        find3rdNumToWin(num1, num2);
    });
});