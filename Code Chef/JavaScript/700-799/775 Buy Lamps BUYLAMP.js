let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findMinCost = (lampsNeeded, minRedLamps, redLampCost, blueLampCost) => {
    const fixedCost = minRedLamps * redLampCost;
    const pendingLamps = lampsNeeded - minRedLamps;
    
    const cheapLamps = Math.min(redLampCost, blueLampCost);
    const pendingLampsCost = pendingLamps * cheapLamps;
    
    const totalCost = fixedCost + pendingLampsCost;
    console.log(totalCost);
    
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [lampsNeeded, minRedLamps, redLampCost, blueLampCost] = testcase;
        findMinCost(lampsNeeded, minRedLamps, redLampCost, blueLampCost);
    });
});