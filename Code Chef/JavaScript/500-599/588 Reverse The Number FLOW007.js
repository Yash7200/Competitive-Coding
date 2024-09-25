let input = '';
process.stdin.on('data', (data) => input += data);

const reverseNumber = (strNumber) => {
    const reversedNumber = Number(strNumber.split('').reverse().join(''));
    console.log(reversedNumber);
};

process.stdin.on('end', () => {
    const testcases = input.trim().split('\n');
    testcases.shift();
    
    testcases.forEach((strNumber) => {
        reverseNumber(strNumber);
    });
});