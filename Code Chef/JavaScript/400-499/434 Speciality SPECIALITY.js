process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const checkUserSpeciality = (problemsSet, problemsTested, problemsWritten) => {
    const userSpeciality = Math.max(problemsSet, problemsTested, problemsWritten);
    
    (userSpeciality === problemsSet)
        ? console.log("Setter")
        : (userSpeciality === problemsTested)
            ? console.log("Tester")
            : console.log("Editorialist");
}

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [problemsSet, problemsTested, problemsWritten] = testcase;
        checkUserSpeciality(problemsSet, problemsTested, problemsWritten);
    });
});