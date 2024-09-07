let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isExpert = (submittedProblems, approvedProblems) => {
    const halfProblems = submittedProblems / 2;
    
    (approvedProblems >= halfProblems)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [submittedProblems, approvedProblems] = testcase;
        isExpert(submittedProblems, approvedProblems);
    });
});