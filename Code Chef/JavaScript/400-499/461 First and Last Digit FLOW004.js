process.stdin.setEncoding('utf-8');

const firstLastDigitSum = (numberAsStr) => {
    const firstDigit = Number(numberAsStr[0]);
    const lastDigit = Number(numberAsStr[(numberAsStr.length - 1)]);
    
    const sum = firstDigit + lastDigit;
    console.log(sum);
};

process.stdin.on('data', (input) => {
    const testcases = input.trim().split("\n");
    
    testcases.shift();
    
    testcases.forEach((numberAsStr) => {
        firstLastDigitSum(numberAsStr);
    });
});