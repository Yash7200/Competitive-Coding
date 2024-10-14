let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray =  strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMinSteps = (targetStair, stairsPerStep) => {
    const pendingStairs = targetStair % stairsPerStep;
    const canGoToEndStair = pendingStairs === 0;
    
    const maxStairsDirectly = parseInt(targetStair / stairsPerStep);
    
    const minSteps = (targetStair < stairsPerStep)
        ? targetStair
        : (canGoToEndStair)
            ? maxStairsDirectly
            : (maxStairsDirectly + pendingStairs);
    
    console.log(minSteps);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [targetStair, stairsPerStep] = testcase;
        countMinSteps(targetStair, stairsPerStep);
    });
});