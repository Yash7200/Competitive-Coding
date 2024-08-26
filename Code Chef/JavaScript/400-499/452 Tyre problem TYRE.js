process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const countTotalTyres = (noOfBikes, noOfCars) => {
    const tyresInBikes = noOfBikes * 2;
    const tyresInCars = noOfCars * 4;
    
    const totalTyres = tyresInBikes + tyresInCars;
    console.log(totalTyres);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [noOfBikes, noOfCars] = testcase;
        countTotalTyres(noOfBikes, noOfCars);
    });
});