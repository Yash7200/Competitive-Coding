let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(' ').map(Number));
    
    return intArray;
}

const countWrappedGifts = (height, length, width) => {
    const totalArea = 2 * ((height * length) + (height * width) + (length * width));
    
    const giftsWrapped = parseInt(1000/totalArea);
    console.log(giftsWrapped);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [height, length, width] = testcase;
        countWrappedGifts(height, length, width);
    });
});
