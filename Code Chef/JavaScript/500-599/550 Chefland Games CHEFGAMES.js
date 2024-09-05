let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isBallInOrOut = (refree1decision, refree2decision, refree3decision, refree4decision) => {
    (refree1decision === 1 || refree2decision === 1 || refree3decision === 1 || refree4decision === 1)
        ? console.log('OUT')
        : console.log('IN');
};

let a= "eqdq"
a.reverse()

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [refree1decision, refree2decision, refree3decision, refree4decision] = testcase;
        isBallInOrOut(refree1decision, refree2decision, refree3decision, refree4decision);
    });
});