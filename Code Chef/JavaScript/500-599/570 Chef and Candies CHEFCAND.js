let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countPacketsToBuy = (children, presentCandies) => {
    const candiesNeeded = children - presentCandies;
    
    const packetsToBuy = (presentCandies >= children)
        ? 0
        : ((candiesNeeded % 4) === 0)
            ? (candiesNeeded / 4)
            : parseInt(candiesNeeded / 4) + 1;
    console.log(packetsToBuy);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [children, presentCandies] = testcase;
        countPacketsToBuy(children, presentCandies);
    });
});