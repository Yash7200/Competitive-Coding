process.stdin.setEncoding("utf-8");

const compareTax = (oldTax, newTax) => {
    (oldTax === newTax)
        ? console.log("SAME")
        : (oldTax > newTax)
            ? console.log("DECREASED")
            : console.log("INCREASED");
}

process.stdin.on("data", (input) => {
    const [oldTax, newTax] = input.trim().split(" ").map(Number);
    compareTax(oldTax, newTax);
});