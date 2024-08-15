process.stdin.setEncoding("utf-8");

const priceOfChef = (winningPrize, losingPrize, goalsOfChef, goalsOfChefina) => {
    (goalsOfChef > goalsOfChefina)
        ? console.log(winningPrize)
        : console.log(losingPrize);
};

process.stdin.on("data", (input) => {
    const [winningPrize, losingPrize, goalsOfChef, goalsOfChefina] = input.trim().split(" ").map(Number);
    
    priceOfChef(winningPrize, losingPrize, goalsOfChef, goalsOfChefina);
});