process.stdin.setEncoding('utf-8');

let input = "";

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const doesMoreThanHalfStudentsPassed = (schoolsCount, studentsCountPerSchool, totalStudentsPassed) => {
    const totalStudents = schoolsCount * studentsCountPerSchool;
    const halfOftotalStudents = parseInt(totalStudents / 2);
    
    (totalStudentsPassed > halfOftotalStudents)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('data', (data) => {
    input += data;
});

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [schoolsCount, studentsCountPerSchool, studentsPassed] = testcase;
        doesMoreThanHalfStudentsPassed(schoolsCount, studentsCountPerSchool, studentsPassed);
    });
});