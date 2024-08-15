process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const countSeatingCapacity = (fiveSeaterCars, sevenSeaterCars) => {
    const seatingCapacity = (fiveSeaterCars * 5) + (sevenSeaterCars * 7);
    console.log(seatingCapacity);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [fiveSeaterCars, sevenSeaterCars] = testcase;
        countSeatingCapacity(fiveSeaterCars, sevenSeaterCars);
    });
});