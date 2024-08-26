process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const whichTVsetToBuy = (priceOfTVsetA, priceOfTVsetB, discountOnTVsetA, discountOnTVsetB) => {
    const discountedPriceOfTVsetA = priceOfTVsetA - discountOnTVsetA;
    const discountedPriceOfTVsetB = priceOfTVsetB - discountOnTVsetB;
    
    (discountedPriceOfTVsetA === discountedPriceOfTVsetB)
        ? console.log("Any")
        : (discountedPriceOfTVsetA < discountedPriceOfTVsetB)
            ? console.log("First")
            : console.log("Second");
    
}

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [priceOfTVsetA, priceOfTVsetB, discountOnTVsetA, discountOnTVsetB] = testcase;
        
        whichTVsetToBuy(priceOfTVsetA, priceOfTVsetB, discountOnTVsetA, discountOnTVsetB);
    });
});