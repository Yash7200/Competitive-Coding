let input = '';
process.stdin.on('data', (data) => input += data);

const checkBinaryParity = (strNum) => {
    const binaryStr = Number(strNum).toString(2).split('').map(Number);
    const binarySum = binaryStr.reduce((acc, item) => acc + item, 0);
    
    const evenOrOdd = ( (binarySum % 2) === 0 ) 
        ? 'EVEN' : 'ODD';
    console.log(evenOrOdd);
};

process.stdin.on('end', () => {
    const testcases = input.trim().split('\n').map((item) => item.trim());
    testcases.shift();
    
    testcases.forEach((strNum) => {
        checkBinaryParity(strNum);
    });
});