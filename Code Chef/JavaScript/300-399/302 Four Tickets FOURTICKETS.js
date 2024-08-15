process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const isExceeding1000 = (priceOf1Ticket) => {
    const priceOf4Tickets = priceOf1Ticket * 4;
    (priceOf4Tickets > 1000)
        ? console.log("NO")
        : console.log("YES");
}

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((priceOf1Ticket) => {
        isExceeding1000(priceOf1Ticket);
    });
});