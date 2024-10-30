let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findIndivisibleNum = (num1, num2, num3) => {
    let indivisibleNum = 2;
    const isDivisible = (dividingNum) => ( (num1 % dividingNum) === 0 ) ||
        ( (num2 % dividingNum) === 0 ) ||
        ( (num3 % dividingNum) === 0 );
        
    while(isDivisible(indivisibleNum)){
        ++indivisibleNum;
    }
    console.log(indivisibleNum);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [num1, num2, num3] = testcase;
        findIndivisibleNum(num1, num2, num3);
    });
});