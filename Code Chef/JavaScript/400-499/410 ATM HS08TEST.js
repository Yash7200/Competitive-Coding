process.stdin.setEncoding("utf-8");

const showFinalBalance = (cashToWithdraw, balance) => {
    const finalBalance = (( (cashToWithdraw + 0.50) > balance ) || (cashToWithdraw % 5 !== 0))
            ? balance
            : (balance - cashToWithdraw - 0.50).toFixed(2);
        
    console.log(finalBalance);
};

process.stdin.on("data", (input) => {
    const [cashToWithdraw, balance] = input.trim().split(" ").map(Number);
    showFinalBalance(cashToWithdraw, balance);
});