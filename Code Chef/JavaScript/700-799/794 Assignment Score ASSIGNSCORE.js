let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const convertToInt = (input) => (input.includes(' ')) 
        ? input.trim().split(' ').map(Number)
        : [Number(input.trim())]
    ;
    
    const intArray = strArray.reduce((acc, item, index) => {
        if((index % 2) === 0) return acc;
        
        const payload = convertToInt(item);
        acc.push(payload);
        
        return acc;
    }, []);

    return intArray;
};

const countMarksToPass = (assignmentMarks) => {
    const totalAssignments = assignmentMarks.length + 1;
    const totalPassingMarks = 50 * totalAssignments;
    
    const totalMarks = assignmentMarks.reduce((acc, marks) => acc + marks, 0);
    
    const isPossibleToPass = (totalMarks + 100) >= totalPassingMarks;
    const marksToPass = (totalMarks >= totalPassingMarks) ? 0
        : (isPossibleToPass)
            ? totalPassingMarks - totalMarks : -1
    ;
    console.log(marksToPass);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((assignmentMarks) => countMarksToPass(assignmentMarks));
});
