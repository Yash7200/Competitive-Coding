let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    
    const intArray = strArray
        .filter((_, index) => (index % 2) === 1)
        .map((item) => (item.includes(' ')) ? item.trim().split(' ').map(Number) : Number(input.trim()))
    ;
    return intArray;
};

const checkHappyStudents = (studentsList) => {
    const hasHighestMarks = (marks, prevStudentsMarks) => marks > Math.max(...prevStudentsMarks);
    
    const moodStatusOfStudents = studentsList.reduce((acc, item, index) => {
        const happinessStatus = (index === 0) 
            ? 1
            : (hasHighestMarks(item, studentsList.slice(0, index)))
                ? 1 : 0
        ;
        acc.push(happinessStatus);

        return acc;
    }, []).join(' ');
    
    console.log(moodStatusOfStudents)
}

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((studentsList) => checkHappyStudents(studentsList));
});
