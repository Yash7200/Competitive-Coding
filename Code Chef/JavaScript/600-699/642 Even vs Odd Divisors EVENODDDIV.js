let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const compareEvenOddDivisor = (num) => {
    let divisor = 1;
    let oddDivisorsCount = 0;
    let evenDivisorsCount = 0;
    
    while(divisor <= num){
        ( (num % divisor) === 0 )
            ? ( (divisor % 2) === 0 )
                ? ++evenDivisorsCount
                : ++oddDivisorsCount
            : {};
            
        ++divisor;
    }
    
    const isOddEvenDivisorsAreSame = oddDivisorsCount === evenDivisorsCount;
    const isOddDivisorsMore = oddDivisorsCount > evenDivisorsCount;
    const isEvenDivisorsMore = evenDivisorsCount > oddDivisorsCount;
    
    (isOddEvenDivisorsAreSame)
        ? console.log(0)
        : (isOddDivisorsMore)
            ? console.log(-1)
            : (isEvenDivisorsMore)
                ? console.log(1) : {};
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((num) => {
        compareEvenOddDivisor(num);
    });
});