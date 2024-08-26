process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const isGroupPerfect = (ageOf1stPerson, ageOf2ndPerson, ageOf3rdPerson) => {
    ((ageOf1stPerson === ageOf2ndPerson + ageOf3rdPerson) || (ageOf2ndPerson === ageOf1stPerson + ageOf3rdPerson) || (ageOf3rdPerson === ageOf1stPerson + ageOf2ndPerson))
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
       const [ageOf1stPerson, ageOf2ndPerson, ageOf3rdPerson] = testcase;
       isGroupPerfect(ageOf1stPerson, ageOf2ndPerson, ageOf3rdPerson);
    });
});