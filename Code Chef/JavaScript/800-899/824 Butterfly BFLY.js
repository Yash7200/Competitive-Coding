let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canWeFeedAll = (redFlowers, greenFlowers, blueFlowers) => {
    const redBtrflies = redFlowers;
    const blueBtrflies = blueFlowers;
    const greenBtrflies = greenFlowers;
    
    const isNotEnoughFlowers = (redBtrflies > (blueFlowers + greenFlowers))
        || (greenBtrflies > (redFlowers + blueFlowers))
        || (blueBtrflies > (redFlowers + greenFlowers))
    ;
    
    (isNotEnoughFlowers) ? console.log('NO') : console.log('YES');  
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [redFlowers, greenFlowers, blueFlowers] = testcase;
        canWeFeedAll(redFlowers, greenFlowers, blueFlowers);
    });
});
