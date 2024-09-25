let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const whichExitToUse = (seatNo) => {
    (seatNo < 51)
        ? console.log('LEFT')
        : console.log('RIGHT');
}

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((seatNo) => {
        whichExitToUse(seatNo);
    });
});