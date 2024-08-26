process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const whichMasksToBuy = (priceOfDisposableMasks, priceOfClothMasks) => {
    const priceOf100DisposableMasks = priceOfDisposableMasks * 100;
    const priceOf10ClothMasks = priceOfClothMasks * 10;
    
    (priceOf100DisposableMasks === priceOf10ClothMasks)
        ? console.log("Cloth")
        : (priceOf10ClothMasks < priceOf100DisposableMasks)
            ? console.log("Cloth")
            : console.log("Disposable");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [priceOfDisposableMasks, priceOfClothMasks] = testcase;
        whichMasksToBuy(priceOfDisposableMasks, priceOfClothMasks);
    });
});