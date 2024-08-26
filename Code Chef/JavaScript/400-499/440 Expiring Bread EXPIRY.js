process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const canEatAllLoaves = (loavesOfBread, daysToExpire, loavesPerDay) => {
    const totalLoavesCanBeEaten = daysToExpire * loavesPerDay;
    
    (totalLoavesCanBeEaten >= loavesOfBread)
        ? console.log("Yes")
        : console.log("No");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [loavesOfBread, daysToExpire, loavesPerDay] = testcase;
        
        canEatAllLoaves(loavesOfBread, daysToExpire, loavesPerDay);
    });
});