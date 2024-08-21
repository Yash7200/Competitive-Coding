process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const whatIsTasty = (chocolatesInPack, candiesInPack) => {
    const tasteRatingOfChocolate = chocolatesInPack * 2;
    const tasteRatingOfCandy = candiesInPack * 5;
    
    (tasteRatingOfChocolate === tasteRatingOfCandy)
        ? console.log("Either")
        : (tasteRatingOfChocolate > tasteRatingOfCandy)
            ? console.log("Chocolate")
            : console.log("Candy");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [chocolatesInPack, candiesInPack] = testcase;
        whatIsTasty(chocolatesInPack, candiesInPack);
    });
});