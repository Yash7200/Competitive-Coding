let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    strArray = strArray.filter((_, index) => index % 2 === 1);
    
    const intArray = strArray.map((item) => {
       item = (item.includes(' ')) ? item.trim().split(' ').map(Number) : [Number(item.trim())];
       
       return item;
    });
    
    return intArray;
};

const countTotalBreaks = (sticks) => {
    let count = 0;
    
    sticks.forEach((stickLength) => {
        count += (stickLength - 1);
    });
    console.log(count);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((sticks) => countTotalBreaks(sticks));
});
