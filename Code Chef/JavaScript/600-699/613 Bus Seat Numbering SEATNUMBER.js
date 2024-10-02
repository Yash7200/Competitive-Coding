let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const findSeatType = (seatNum) => {
    (seatNum <= 10)
        ? console.log('Lower Double')
        : (seatNum <= 15)
            ? console.log('Lower Single')
            : (seatNum <= 25)
                ? console.log('Upper Double')
                : console.log('Upper Single');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((seatNum) => {
        findSeatType(seatNum);
    });
});