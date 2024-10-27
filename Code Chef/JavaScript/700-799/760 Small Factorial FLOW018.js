let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const findFactorial = (num) => {
    num = BigInt(num);
    let bigIntFactorial = BigInt(1);
    
    while(num > 1){
        bigIntFactorial *= num;
        --num;
    }
    
    const strFactorial = String(bigIntFactorial);
    console.log(strFactorial);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((num) => {
        findFactorial(num);
    });
});