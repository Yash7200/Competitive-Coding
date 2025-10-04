let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countStepsToTravel = (crntPosition, goalCheckpoint, totalCheckpoints) => {
    if(crntPosition === goalCheckpoint){
        console.log(0);
        return;
    }
    
    const forwardMoveCost = Math.abs(goalCheckpoint - crntPosition);
    const reverseMoveCost = Math.abs(totalCheckpoints - forwardMoveCost);
    
    const minCost = Math.min(forwardMoveCost, reverseMoveCost);
    console.log(minCost);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [crntPosition, goalCheckpoint, totalCheckpoints] = testcase;
        countStepsToTravel(crntPosition, goalCheckpoint, totalCheckpoints);
    });
});
