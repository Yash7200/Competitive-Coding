process.stdin.setEncoding("utf-8");

const canBuy2Icecreams = (costOf1Icecream, budget) => {
    const costOf2Icecreams = costOf1Icecream * 2;
    
    (costOf2Icecreams <= budget)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    const [costOf1Icecream, budget] = input.trim().split(" ").map(Number);
    
    canBuy2Icecreams(costOf1Icecream, budget);
});