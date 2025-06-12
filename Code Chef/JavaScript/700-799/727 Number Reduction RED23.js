let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((item) => Number(item.trim()));
    
    return intArray;
};

const getSmallestNum = (num) => {
    const isEven = (number) => (number % 2) === 0;
    const isMoreThan3 = (number) => number > 3;
    
    while(isMoreThan3(num) || isEven(num)){
        num = (isEven(num)) 
            ? parseInt(num / 2) 
            : (isMoreThan3(num))
                ? (num - 3)
                : num
        ;
    }
    console.log(num);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((num) => getSmallestNum(num));
});
