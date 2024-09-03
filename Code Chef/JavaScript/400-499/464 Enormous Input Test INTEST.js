process.stdin.setEncoding('utf-8');

let input = "";

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => {
        strItem = strItem.trim();
        
        if (strItem.includes(' ')) return strItem.split(' ').map(Number);
        
        return Number(strItem);
    });
    
    return intArray;
};

const isDivisible = (testcases, divisor) => {
    let divisableCount = 0;
    
    testcases.forEach((number) => {
        (number % divisor === 0)
            ? ++divisableCount
            : {};
    });
    
    console.log(divisableCount);
};

process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split("\n"));
    
    const [numbersCount, divisor] = testcases[0];
    testcases.shift();
    
    isDivisible(testcases, divisor)
});