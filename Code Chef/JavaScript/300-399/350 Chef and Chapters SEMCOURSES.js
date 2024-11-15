process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const countChaptersToStudy = (totalCourses, unitsPerCourse, chapterPerUnit) => {
    const totalChapters = totalCourses * unitsPerCourse * chapterPerUnit;
    console.log(totalChapters);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [totalCourses, unitsPerCourse, chapterPerUnit] = testcase;
        
        countChaptersToStudy(totalCourses, unitsPerCourse, chapterPerUnit);
    });
});