let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findMinWaitTime = (bulletSpeed, goombaPosition, maxTime) => {
    const timeToHit = (bulletSpeed >= goombaPosition)
        ? 1
        : parseInt(goombaPosition / bulletSpeed);
        
    const minWaitTime = (timeToHit >= maxTime)
        ? 0
        : maxTime - timeToHit;
    
    console.log(minWaitTime);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [bulletSpeed, goombaPosition, maxTime] = testcase;
        findMinWaitTime(bulletSpeed, goombaPosition, maxTime);
    });
});