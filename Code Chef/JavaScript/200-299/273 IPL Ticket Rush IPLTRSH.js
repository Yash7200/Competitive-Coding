process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
}

const countStudentsCantGo = (totalStudents, totalTickets) => {
    if (totalTickets > totalStudents){
        console.log(0);
    }else{
        const totalStudentsCantGo = Math.abs(totalStudents - totalTickets);
        console.log(totalStudentsCantGo);
    }
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [students, tickets] = testcase;
        countStudentsCantGo(students, tickets);
    });
});