let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const isGoodProgram = (nibble) => {
    (nibble % 4 === 0)
        ? console.log('Good')
        : console.log('Not Good');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((nibble) => {
        isGoodProgram(nibble);
    });
});