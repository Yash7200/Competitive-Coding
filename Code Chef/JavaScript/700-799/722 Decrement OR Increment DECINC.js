let input = '';
process.stdin.on('data', (data) => input += data);

const decrementOrIncrement = (num) => {
    const isDivisibleBy4 = (num % 4) === 0;
    const newNum = (isDivisibleBy4) ? ++num : --num;
    
    console.log(newNum);
};

process.stdin.on('end', () => {
    const num = Number(input.trim());
    decrementOrIncrement(num);
});