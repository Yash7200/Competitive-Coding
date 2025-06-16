let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const getMaxWorkDone = (daysOfWeek, workPerDay, workToDoInFewDays, workInPendingDays) => {
    const workDoneIn1stMethod = 7 * workPerDay;
    
    const workDoneInFewDays = workToDoInFewDays * daysOfWeek;
    const pendingDays = 7 - daysOfWeek;
    const workDoneInPendingDays = workInPendingDays * pendingDays;
    const workDoneIn2ndMethod = workDoneInFewDays + workDoneInPendingDays;
    
    const maxWorkDone = Math.max(workDoneIn1stMethod, workDoneIn2ndMethod);
    console.log(maxWorkDone);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [daysOfWeek, workPerDay, workToDoInFewDays, workInPendingDays] = testcase;
        getMaxWorkDone(daysOfWeek, workPerDay, workToDoInFewDays, workInPendingDays);
    })
});
