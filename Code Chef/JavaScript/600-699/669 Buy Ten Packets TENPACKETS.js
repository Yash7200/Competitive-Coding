let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findMinCost = (priceOf2pack, priceOf4pack) => {
    const costOn5x2packs = priceOf2pack * 5;
    const costOn4n2packs = priceOf2pack + (priceOf4pack * 2);
    
    const minCost = Math.min(costOn5x2packs, costOn4n2packs);
    console.log(minCost)
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [priceOf2pack, priceOf4pack] = testcase;
        findMinCost(priceOf2pack, priceOf4pack);
    });
});