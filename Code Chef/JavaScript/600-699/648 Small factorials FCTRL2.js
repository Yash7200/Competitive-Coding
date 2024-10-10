let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countFactorial = (number) => {
    let factorial = BigInt(1);
    let currentNumber = BigInt(1);
    
    while(currentNumber <= number){
        factorial *= currentNumber;
        ++currentNumber;
    }
    
    console.log(factorial.toString());
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((number) => {
        countFactorial(number);
    });
});