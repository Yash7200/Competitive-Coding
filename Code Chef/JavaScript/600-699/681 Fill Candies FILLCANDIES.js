let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray =  strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findMinBagsNeeded = (totalCandies, pocketsPerBag, candiesPerPocket) => {
    const candiesPerBag = pocketsPerBag * candiesPerPocket;
    const isExtraBagNeeded = (totalCandies % candiesPerBag) !== 0;
    
    const minBagsNeeded = (candiesPerBag >= totalCandies)
        ? 1
        : (isExtraBagNeeded)
            ? parseInt(totalCandies / candiesPerBag) + 1
            : (totalCandies / candiesPerBag);
            
    console.log(minBagsNeeded);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [totalCandies, pocketsPerBag, candiesPerPocket] = testcase;
        findMinBagsNeeded(totalCandies, pocketsPerBag, candiesPerPocket);
    });
});