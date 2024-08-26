process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const countButtonPressNeeded = (currentVolume, desiredVolume) => {
    const buttonPressNeeded = Math.abs(currentVolume - desiredVolume);
    console.log(buttonPressNeeded);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [currentVolume, desiredVolume] = testcase;
        countButtonPressNeeded(currentVolume, desiredVolume);
    });
});