let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    return intArray;
};

const canEatSlicesFromOranges = (orangesCount, sliceEatCount) => {
    const minSlices = orangesCount * 10;
    const maxSlices = orangesCount * 12;

    (sliceEatCount >= minSlices && sliceEatCount <= maxSlices)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n').slice(1));

    testcases.forEach((testcase) => {
        const [ orangesCount, sliceEatCount ] = testcase;
        canEatSlicesFromOranges(orangesCount, sliceEatCount);
    });
});
