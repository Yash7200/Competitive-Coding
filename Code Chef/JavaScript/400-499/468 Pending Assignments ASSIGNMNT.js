process.stdin.setEncoding('utf-8');

let input = "";

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canFinishAllAssignments = (assignments, timeToFinish1Assignment, deadline) => {
    const deadlineInMins = deadline * 24 * 60;
    const timeToFinishAllAssignments = assignments * timeToFinish1Assignment;
    
    (timeToFinishAllAssignments <= deadlineInMins)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [assignments, timeToFinish1Assignment, deadline] = testcase;
        canFinishAllAssignments(assignments, timeToFinish1Assignment, deadline);
    });
});