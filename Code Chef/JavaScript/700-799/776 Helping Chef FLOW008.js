let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()) );
    
    return intArray;
};

const printMsg = (num) => {
    const msg = (num < 10)
        ? 'Thanks for helping Chef!' : -1;
    console.log(msg);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((num) => {
        printMsg(num);
    });
});