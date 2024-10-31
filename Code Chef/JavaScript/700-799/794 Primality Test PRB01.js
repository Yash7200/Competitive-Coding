let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const isPrimeOrNot = (num) => {
    let divisor = 2;
    
    while(divisor < num ){
        if((num % divisor) === 0) break;
        divisor++;
    }
    
    const isPrime = (divisor === num) ? 'yes' : 'no';
    console.log(isPrime);
    
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((num) => isPrimeOrNot(num));
});