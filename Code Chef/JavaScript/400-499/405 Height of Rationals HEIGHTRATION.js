process.stdin.setEncoding("utf-8");

const findMaxHeight = (numerator, denominator) => {
    const maxHeight = Math.max(numerator, denominator);
    console.log(maxHeight);
};

process.stdin.on("data", (input) => {
    const [numerator, denominator] = input.trim().split(" ").map(Number);
    findMaxHeight(numerator, denominator);
});