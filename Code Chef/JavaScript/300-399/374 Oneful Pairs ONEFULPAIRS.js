process.stdin.setEncoding("utf-8");

const isOnefulPair = (num1, num2) => {
    const result = num1 + num2 + (num1 * num2);

    (result === 111)
        ? console.log("Yes")
        : console.log("No");
};

process.stdin.on("data", (input) => {
    const [num1, num2] = input.trim().split(" ").map(Number);
    isOnefulPair(num1, num2);
});