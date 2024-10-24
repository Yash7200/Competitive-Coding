let input = '';
process.stdin.on('data', (data) => input += data);

const sumOrDiff = (num1, num2) => {
    const result = (num1 > num2)
        ? (num1 - num2) : (num1 + num2);
        
    console.log(result);
};

process.stdin.on('end', () => {
    const [num1, num2] = input.trim().split('\n').map(Number);
    sumOrDiff(num1, num2);
});