process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const isTriangleScalene = (side1, side2, side3) => {
    (side1 === side2 || side1 === side3 || side2 === side3)
        ? console.log("NO")
        : console.log("YES");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [side1, side2, side3] = testcase;
        isTriangleScalene(side1, side2, side3);
    });
});