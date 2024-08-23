process.stdin.setEncoding("utf-8");

const canBuyLaptop = (budget, priceOfLaptop, fundAmount) => {
    const totalAmount = budget + fundAmount;
    
    (priceOfLaptop <= totalAmount)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const [budget, priceOfLaptop, fundAmount] = input.trim().split(" ").map(Number);
    
    canBuyLaptop(budget, priceOfLaptop, fundAmount);
});