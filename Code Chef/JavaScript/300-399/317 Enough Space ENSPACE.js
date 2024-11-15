process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const canStoreAllFiles = (availableSpace, smallFiles, bigFiles) => {
    const totalStorage = smallFiles + (2 * bigFiles);
    (totalStorage <= availableSpace)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [availableSpace, smallFiles, bigFiles] = testcase;
        
        canStoreAllFiles(availableSpace, smallFiles, bigFiles);
    });
});