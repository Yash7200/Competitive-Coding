let input = '';
process.stdin.on('data', (data) => input += data);

const loseOrWin = (strNum) => {
    const num = strNum;
    const reversedNum = strNum.split('').reverse().join('');
    
    const isSameNum = num === reversedNum;
    (isSameNum)
        ? console.log('wins')
        : console.log('loses');
    
};

process.stdin.on('end', () => {
    const testcases = input.trim().split('\n').slice(1).map((strItem) => strItem.trim());
    
    testcases.forEach((strNum) => loseOrWin(strNum));
});
