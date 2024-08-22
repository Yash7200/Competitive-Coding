process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    let intArray = [];
    
    strArray.forEach((strItem) => {
        strItem = strItem.trim();
        
        (strItem.includes(" "))
            ? intArray.push(strItem.split(" ").map(Number))
            : intArray.push(Number(strItem));
    });
    
    return intArray;
};

const canBuyFruits = (budget, costOfFruits) => {
    const [costOfApples, costOfOranges] = costOfFruits;
    const totalCost = costOfApples + costOfOranges;
    
    (totalCost <= budget)
        ? console.log("Yes")
        : console.log("No");
};

process.stdin.on("data", (input) => {
    const [budget, quantityOfFruits] = strToInt(input.trim().split("\n"));
    
    canBuyFruits(budget, quantityOfFruits);
});