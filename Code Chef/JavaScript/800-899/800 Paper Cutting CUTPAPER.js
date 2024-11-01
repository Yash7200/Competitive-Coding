let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMaxCutouts = (paperSide, cutoutSide) => {
    const oneSideCut = Math.floor(paperSide / cutoutSide);
    
    const maxCutouts = Math.pow(oneSideCut, 2);
    console.log(maxCutouts);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [paperSide, cutoutSide] = testcase;
        countMaxCutouts(paperSide, cutoutSide);
    });
});
