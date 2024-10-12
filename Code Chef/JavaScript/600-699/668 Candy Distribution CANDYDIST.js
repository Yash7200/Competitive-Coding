let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canDividedEqually = (candies, friends) => {
    const isOddCandies = (candies % 2) !== 0;
    const isOddDistribution = ((candies / friends) % 2) !== 0;
    const isLessCandies = candies < friends;
    
    (isOddCandies || isOddDistribution || isLessCandies)
        ? console.log('No')
        : console.log('Yes');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [candies, friends] = testcase;
        canDividedEqually(candies, friends);
    });
});