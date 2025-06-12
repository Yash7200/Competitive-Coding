let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((item) => Number(item.trim()));
    
    return intArray;
};

const getMaxSizedTriangle = (sticksLength) => {
    const side1 = sticksLength;
    const side2 = --sticksLength;
    const side3 = --sticksLength;
    
    const sumOfAllSide = side1 + side2 + side3;
    const isValidTriangle = (2 * side1) < sumOfAllSide;
    
    (isValidTriangle)
        ? console.log(sumOfAllSide)
        : console.log(-1)
    ;
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((sticksLength) => getMaxSizedTriangle(sticksLength));
});
