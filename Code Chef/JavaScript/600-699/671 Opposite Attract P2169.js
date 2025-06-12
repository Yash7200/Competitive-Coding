let input = '';
process.stdin.on('data', (data) => input += data);

const modifyInput = (strArray) => {
    strArray.shift();
    strArray = strArray.filter((_, index) => (index % 2) === 1).map((item) => item.trim());
    
    return strArray;
};

const swapBinaryStr = (string) => {
    const newString = string.split('').map((item) => (item === '0')? '1' : '0').join('');
    console.log(newString)
}

process.stdin.on('end', () => {
    const testcases = modifyInput(input.trim().split('\n'));
    
    testcases.forEach((string) => {
        swapBinaryStr(string);
    });
});
