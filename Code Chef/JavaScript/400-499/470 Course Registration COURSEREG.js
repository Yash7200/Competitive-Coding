process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const canAllRegisterInCourse = (studentCount, totalSeats, enrolledStudents) => {
    const courseVacancy = totalSeats - enrolledStudents;
    
    (courseVacancy >= studentCount)
        ? console.log("Yes")
        : console.log("No");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [ studentCount, totalSeats, enrolledStudents ] = testcase;
        canAllRegisterInCourse(studentCount, totalSeats, enrolledStudents);
    });
});